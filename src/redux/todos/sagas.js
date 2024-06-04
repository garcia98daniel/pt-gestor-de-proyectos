import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import { 
    todosGetRequesting,
    todosGetSuccess,
    todosGetError,
    todosResetStates,
 } from "./slice";

const todosUrl = `${ROUTE_ENDPOINT}/todos`;

const todosApi = async () => {
    return fetch(`${todosUrl}`, {
        method: 'Get',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => {
            if (response.status === 500)
                throw "Error interno del servidor";
            
            // console.log(response.status)
            return response.json()
        })
        .then(json => {
          console.log(json.length)
        if(json.length){
            return json;
        }
        
        throw json;
 
        }).catch((error) => {
            throw error;
        })
};

function* todosFlow(action) {
    try {
        
        const todos = yield call(todosApi);
        // console.log(todos);
        yield put(todosGetSuccess());
        yield put(todosGetSuccess(todos));
        yield put(todosResetStates());

    } catch (error) {
        yield put(todosGetError(error));
    }
}


function* todosWatcher() {
    yield all([
        takeEvery(todosGetRequesting.type, todosFlow),
    ])
}

export default todosWatcher;

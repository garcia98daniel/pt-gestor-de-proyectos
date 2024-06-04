import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import { 
    notificationsGetRequesting,
    notificationsGetSuccess,
    notificationsGetError,
    notificationsResetStates,
 } from "./slice";

const notificationsUrl = `${ROUTE_ENDPOINT}/notification`;

const notificationsApi = async () => {
    return fetch(`${notificationsUrl}`, {
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

function* notificationsFlow(action) {
    try {
        
        const notifications = yield call(notificationsApi);
        // console.log(notifications);
        yield put(notificationsGetSuccess());
        yield put(notificationsGetSuccess(notifications));
        yield put(notificationsResetStates());

    } catch (error) {
        yield put(notificationsGetError(error));
    }
}


function* notificationsWatcher() {
    yield all([
        takeEvery(notificationsGetRequesting.type, notificationsFlow),
    ])
}

export default notificationsWatcher;

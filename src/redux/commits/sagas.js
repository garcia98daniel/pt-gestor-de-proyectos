import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import { 
    commitsGetRequesting,
    commitsGetSuccess,
    commitsGetError,
    commitsResetStates,
 } from "./slice";

const commitsUrl = `${ROUTE_ENDPOINT}/report_commits`;

const commitsApi = async () => {
    return fetch(`${commitsUrl}`, {
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

function* commitsFlow(action) {
    try {
        
        const commits = yield call(commitsApi);
        // console.log(commits);
        yield put(commitsGetSuccess());
        yield put(commitsGetSuccess(commits));
        yield put(commitsResetStates());

    } catch (error) {
        yield put(commitsGetError(error));
    }
}


function* commitsWatcher() {
    yield all([
        takeEvery(commitsGetRequesting.type, commitsFlow),
    ])
}

export default commitsWatcher;

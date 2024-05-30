// src/state/features/catalogue/sagas.ts

import { call, put, all, takeEvery } from 'redux-saga/effects';
import { changeUserName } from './generalsEffects/slice';

const loadUserApi = (token) => {
    return fetch(`${isoccerNewsUrl}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => {
        // console.log(response.status)
        if (response.status === 500)
            throw "Error interno del servidor";

        if (response.status == 401) {
            throw 401;
        }

        return response.json()
    })
    .then(json => {
    //   console.log(json)
        if(json.hasOwnProperty('error')){
            throw json;
        }

        if (json.hasOwnProperty('data')){
            return json.data;
        }
        throw json;
    }).catch((error) => {
        throw error;
    })
};


function* loadUserFlow(action) {
    const {payload} = action;
    try {
        console.log(payload+"sagas");
        // const news = yield call(loadUserApi, payload);
        // yield put(userSuccess(news));
        // yield put(userResetState());
    } catch (error) {
        // yield put(newsError(error));
    }
}

function* userWatcher() {
    yield all([
        takeEvery(changeUserName.type, loadUserFlow),
    ])
}

export default userWatcher;
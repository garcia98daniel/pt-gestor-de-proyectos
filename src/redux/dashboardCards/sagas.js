import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../utils/route";
import { 
    dashboardCardsGetRequesting,
    dashboardCardsGetSuccess,
    dashboardCardsGetError,
    dashboardCardsResetStates,
 } from "./slice";

const dashboardCardsUrl = `${ROUTE_ENDPOINT}/dashboard_cards`;

const dashboardCardsApi = async () => {
    return fetch(`${dashboardCardsUrl}`, {
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
          console.log(json)
        if(json){
            return json;
        }
        
        throw json;
 
        }).catch((error) => {
            throw error;
        })
};

function* dashboardCardsFlow(action) {
    try {
        
        const dashboardCards = yield call(dashboardCardsApi);
        // console.log(dashboardCards);
        yield put(dashboardCardsGetSuccess());
        yield put(dashboardCardsGetSuccess(dashboardCards));
        yield put(dashboardCardsResetStates());

    } catch (error) {
        yield put(dashboardCardsGetError(error));
    }
}


function* dashboardCardsWatcher() {
    yield all([
        takeEvery(dashboardCardsGetRequesting.type, dashboardCardsFlow),
    ])
}

export default dashboardCardsWatcher;

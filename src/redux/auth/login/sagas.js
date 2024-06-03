import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import { 
    loginRequesting,
    loginSuccess,
    loginError,
    loginResetStates,
 } from "./slice";
// import {clientSet, clientUnset} from "../../client/actions";
import {userGetSuccess} from "../user/slice";

const loginUrl = `${ROUTE_ENDPOINT}/login`;

const loginApi = async (values) => {
    const {user, password} = values;
    return fetch(`${loginUrl}?user=${user}&password=${password}`, {
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
          console.log(json.length)
        if(json.length == 1){
            if(json[0]?.user === user && json[0]?.password === password){
                return json;
            }
        }
        
        throw "Usuario o contraseña invalida";
 
        }).catch((error) => {
            throw error;
        })
};

function* loginFlow(action) {
    try {
        
        const values = action.payload;
        console.log(values);
        const user = yield call(loginApi, values);
        yield put(loginSuccess());
        yield put(userGetSuccess(user[0]));
        // yield put(clientSet(user.token));
        yield put(loginResetStates());

    } catch (error) {
        yield put(loginError(error));
    }
}


function* loginWatcher() {
    yield all([
        takeEvery(loginRequesting.type, loginFlow),
    ])
}

export default loginWatcher;

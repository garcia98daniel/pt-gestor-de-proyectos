import {call, all, put, takeEvery} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from "../../../utils/route";
import {
    loginSuccess,
    loginError,
    loginResetStates,
} from "./actions";
import {LOGIN_REQUESTING} from "./constants";
import {clientSet, clientUnset} from "../../client/actions";
import {userGetSuccess, userResetStatesLogout} from "../user/actions";
import { adminUserResetStatesLogout } from '../../admin/auth/adminUser/actions';
import { superAdminUserResetStatesLogout } from '../../s-a/auth/sAdminUser/actions';

// import {handlerAlertModal} from "../../menusModals/actions";

// import AsyncStorage from '@react-native-community/async-storage';
// import {DropDownHolder} from "../../../../App";

const loginUrl = `${ROUTE_ENDPOINT}/login`;

const loginApi = async (values) => {
    let body = {
        email: values.email,
        password: values.password,
    };
    return fetch(`${loginUrl}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            // console.log(response.status)
            if (response.status === 500)
                throw "Error interno del servidor";

            return response.json()
        })
        .then(json => {
        //   console.log(json)
          if(json.hasOwnProperty('errors')){
            throw json;
        }

        if (json.hasOwnProperty('token')){
            // console.log("token")
            return json;
        }
        throw json;
        }).catch((error) => {
            throw error;
        })
};

function* loginFlow(action) {
    try {
        //clear all before login
        // yield put(userResetStatesLogout());
        yield put(clientUnset());
        yield put(adminUserResetStatesLogout());
        yield put(superAdminUserResetStatesLogout());

        const {values} = action;
        const user = yield call(loginApi, values);
        // console.log(user);
        if(user.data.email_confirmed){ //email confirmed
            yield put(loginSuccess());
            yield put(userGetSuccess(user.data));
            yield put(clientSet(user.token));
            yield put(loginResetStates());
        }
        // yield put(setTokenStorage(token));

    } catch (error) {
        if(error.message === "Confirma tu correo electronico para inisiar sesion"){
            yield put(loginError({email_confirmed:"Confirma tu correo electronico para inisiar sesion"}));
        }else{
            // console.log("catch error loginflow")
            // yield put(handlerAlertModal('error', 'Ups! Al parecer hubo un error, por favor verifica nuevamente.'));
            yield put(loginError(error));
        }
    }
}


function* loginWatcher() {
    yield all([
        takeEvery(LOGIN_REQUESTING, loginFlow),
    ])
}

export default loginWatcher;

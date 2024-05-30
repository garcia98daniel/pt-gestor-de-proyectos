import {all, fork} from 'redux-saga/effects';
//
import userSagas from './sagas';
// import loginSagas from './auth/login/sagas';
// import registerSagas from './auth/register/sagas';
// import logoutSagas from './auth/logout/sagas';
// import forgotSagas from './auth/forgot/sagas';
// import userSagas from './auth/user/sagas';

function* IndexSagas() {
    yield all([
        // fork(loginSagas),
        // fork(registerSagas),
        // fork(logoutSagas),
        // fork(forgotSagas),
        fork(userSagas),
    ]);
}
export default IndexSagas
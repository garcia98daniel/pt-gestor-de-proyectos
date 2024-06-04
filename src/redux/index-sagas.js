import {all, fork} from 'redux-saga/effects';
//
import userSagas from './auth/user/sagas';
import loginSagas from './auth/login/sagas';
import notificationsSagas from './notifications/sagas';
import todosSagas from './todos/sagas';
import dashboardCardsSagas from './dashboardCards/sagas';
import projectsSagas from './projects/sagas';
import usersSagas from './users/sagas';
// import registerSagas from './auth/register/sagas';
// import logoutSagas from './auth/logout/sagas';
// import forgotSagas from './auth/forgot/sagas';
// import userSagas from './auth/user/sagas';

function* IndexSagas() {
    yield all([
        fork(loginSagas),
        fork(notificationsSagas),
        fork(todosSagas),
        fork(dashboardCardsSagas),
        fork(projectsSagas),
        fork(usersSagas),
        // fork(registerSagas),
        // fork(logoutSagas),
        // fork(forgotSagas),
        // fork(userSagas),
    ]);
}
export default IndexSagas
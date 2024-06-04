import {all, fork} from 'redux-saga/effects';
//
import loginSagas from './auth/login/sagas';
import notificationsSagas from './notifications/sagas';
import todosSagas from './todos/sagas';
import dashboardCardsSagas from './dashboardCards/sagas';
import projectsSagas from './projects/sagas';
import usersSagas from './users/sagas';
import commitsSagas from './commits/sagas';


function* IndexSagas() {
    yield all([
        fork(loginSagas),
        fork(notificationsSagas),
        fork(todosSagas),
        fork(dashboardCardsSagas),
        fork(projectsSagas),
        fork(usersSagas),
        fork(commitsSagas),
    ]);
}
export default IndexSagas
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { generalsSlice } from "./generalsEffects/slice";
import { userSlice } from "./auth/user/slice";
import { loginSlice } from "./auth/login/slice";
import { notificationsSlice } from "./notifications/slice";
import { todosSlice } from "./todos/slice";
import { dashboardCardsSlice } from "./dashboardCards/slice";
import { projectsSlice } from "./projects/slice";
import { usersSlice } from "./users/slice";
import { commitsSlice } from "./commits/slice";
import IndexSagas from "./index-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({

    reducer: combineReducers({
        generals:generalsSlice.reducer,
        user:userSlice.reducer,
        login:loginSlice.reducer,
        notifications:notificationsSlice.reducer,
        todos:todosSlice.reducer,
        dashboardCards:dashboardCardsSlice.reducer,
        projects:projectsSlice.reducer,
        commits:commitsSlice.reducer,
    }),


    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools:composeWithDevTools,
})

sagaMiddleware.run(IndexSagas);

export default store;
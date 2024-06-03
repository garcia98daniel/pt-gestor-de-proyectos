import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { generalsSlice } from "./generalsEffects/slice";
import { userSlice } from "./auth/user/slice";
import { loginSlice } from "./auth/login/slice";
import IndexSagas from "./index-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({

    reducer: combineReducers({
        generals:generalsSlice.reducer,
        user:userSlice.reducer,
        login:loginSlice.reducer,
    }),


    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools:composeWithDevTools,
})

sagaMiddleware.run(IndexSagas);

export default store;
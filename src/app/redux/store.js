import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { Slice } from "./generalsEffects/slice";
import IndexSagas from "./index-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({

    reducer: combineReducers({
        user:Slice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools:composeWithDevTools,
})

sagaMiddleware.run(IndexSagas);

export default store;
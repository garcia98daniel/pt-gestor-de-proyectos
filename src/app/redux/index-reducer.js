import { combineReducers } from 'redux';
import loginReducer from './auth/login/reducer';
import clientReducer from './client/reducer';
import userReducer from './auth/user/reducer';
import LogoutReducer from './auth/logout/reducer';
import forgotReducer from './auth/forgot/reducer';
import registerReducer from './auth/register/reducer';
// import generalsEffectsReducer from './generalsEffects/reducer';
import { Slice } from "./generalsEffects/slice";



export default combineReducers({
    loginReducer,
    clientReducer,
    userReducer,
    LogoutReducer,
    forgotReducer,
    registerReducer,
});
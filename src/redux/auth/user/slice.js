import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        requesting: false,
        success: false,
        error: '',
        user: {},
        values: {
            id: '',
            user_id: '',
            user: '',
        },
    },
    reducers: {
        userGetRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        userGetSuccess: (state, action) => {
            state.requesting = false;
            state.success = true;
            state.user = action.payload;
            state.values = {
                id: action.payload.id,
                user_id: action.payload.user_id,
                user: action.payload.user,
            };
        },
        userGetError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        userResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
            state.values = {
                id: state.user.hasOwnProperty('id') ? state.values.id : '',
                user_id: state.user.hasOwnProperty('id') ? state.values.user_id : '',
                user: state.user.hasOwnProperty('id') ? state.values.user : '',
            };
            
        },
        userResetStatesLogout: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
            state.user = {};
            state.values = {
                id: '',
                user_id: '',
                user: '',
            };
        },
    },
});

export const {
    userGetRequesting,
    userGetSuccess,
    userGetError,
    userResetStates,
    userResetStatesLogout,
} = userSlice.actions;


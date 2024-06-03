import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState:{

        requesting: false,
        success: false,
        error: '',
        values: {
            user: '',
            password: '',
        },
    },
    reducers: {
        loginRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        loginSuccess: (state) => {
            state.requesting = false;
            state.success = true;
        },
        loginError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        loginChangeForm: (state, action) => {
            console.log(action.payload)
            state.values[action.payload.key] = action.payload.value;
        },
        loginResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
            state.values = {
                user: '',
                password: '',
            };
        }
    }
});

export const {
    loginRequesting,
    loginSuccess,
    loginError,
    loginChangeForm,
    loginResetStates
} = loginSlice.actions;

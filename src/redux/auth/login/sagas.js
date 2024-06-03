import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requesting: false,
    success: false,
    error: '',
    values: {
        email: '',
        password: '',
    },
    modal_open: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
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
        loginShowHiddenModal: (state, action) => {
            state.modal_open = action.payload;
        },
        loginChangeForm: (state, action) => {
            state.values[action.payload.key] = action.payload.value;
        },
        loginResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
            state.values = {
                email: '',
                password: '',
            };
        }
    }
});

// Exportamos las acciones
export const {
    loginRequesting,
    loginSuccess,
    loginError,
    loginShowHiddenModal,
    loginChangeForm,
    loginResetStates
} = loginSlice.actions;

// Exportamos el reducer
export default loginSlice.reducer;

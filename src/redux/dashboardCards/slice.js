import { createSlice } from '@reduxjs/toolkit';

export const dashboardCardsSlice = createSlice({
    name: 'dashboardCards',
    initialState:{
        requesting: false,
        success: false,
        error: '',
        dashboardCards: {},
    },
    reducers: {
        dashboardCardsGetRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        dashboardCardsGetSuccess: (state, action) => {
            state.requesting = false;
            state.success = true;
            state.dashboardCards = action.payload;
        },
        dashboardCardsGetError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        dashboardCardsResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
        },
    },
});

export const {
    dashboardCardsGetRequesting,
    dashboardCardsGetSuccess,
    dashboardCardsGetError,
    dashboardCardsResetStates,
} = dashboardCardsSlice.actions;


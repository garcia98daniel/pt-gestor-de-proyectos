import { createSlice } from '@reduxjs/toolkit';

export const commitsSlice = createSlice({
    name: 'commits',
    initialState:{
        requesting: false,
        success: false,
        error: '',
        commits: [],
    },
    reducers: {
        commitsGetRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        commitsGetSuccess: (state, action) => {
            state.requesting = false;
            state.success = true;
            state.commits = action.payload;
        },
        commitsGetError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        commitsResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
        },
    },
});

export const {
    commitsGetRequesting,
    commitsGetSuccess,
    commitsGetError,
    commitsResetStates,
} = commitsSlice.actions;


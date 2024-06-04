import { createSlice } from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState:{
        requesting: false,
        success: false,
        error: '',
        notifications: [],
    },
    reducers: {
        notificationsGetRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        notificationsGetSuccess: (state, action) => {
            state.requesting = false;
            state.success = true;
            state.notifications = action.payload;
        },
        notificationsGetError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        notificationsResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
        },
    },
});

export const {
    notificationsGetRequesting,
    notificationsGetSuccess,
    notificationsGetError,
    notificationsResetStates,
} = notificationsSlice.actions;


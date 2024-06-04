import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState:{
        requesting: false,
        success: false,
        error: '',
        todos: [],
    },
    reducers: {
        todosGetRequesting: (state) => {
            state.requesting = true;
            state.success = false;
            state.error = '';
        },
        todosGetSuccess: (state, action) => {
            state.requesting = false;
            state.success = true;
            state.todos = action.payload;
        },
        todosGetError: (state, action) => {
            state.requesting = false;
            state.error = action.payload;
        },
        todosResetStates: (state) => {
            state.requesting = false;
            state.success = false;
            state.error = '';
        },
    },
});

export const {
    todosGetRequesting,
    todosGetSuccess,
    todosGetError,
    todosResetStates,
} = todosSlice.actions;


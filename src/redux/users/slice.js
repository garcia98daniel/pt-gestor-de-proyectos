import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    requesting: false,
    success: false,
    error: '',
    users: [],
  },
  reducers: {
    usersGetRequesting: (state) => {
      state.requesting = true;
      state.success = false;
      state.error = '';
    },
    usersGetSuccess: (state, action) => {
      state.requesting = false;
      state.success = true;
      state.users = action.payload;
    },
    usersGetError: (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    },
    usersResetStates: (state) => {
      state.requesting = false;
      state.success = false;
      state.error = '';
    },
    createUserRequesting: (state) => {
      state.requesting = true;
      state.success = false;
      state.error = '';
    },
    createUserSuccess: (state, action) => {
      state.requesting = false;
      state.success = true;
      state.users.push(action.payload);
    },
    createUserError: (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    },
  },
});

export const {
  usersGetRequesting,
  usersGetSuccess,
  usersGetError,
  usersResetStates,
  createUserRequesting,
  createUserSuccess,
  createUserError,
} = usersSlice.actions;

export default usersSlice.reducer;

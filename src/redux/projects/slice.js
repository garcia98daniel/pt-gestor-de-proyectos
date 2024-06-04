import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    requesting: false,
    success: false,
    error: '',
    projects: [],
  },
  reducers: {
    projectsGetRequesting: (state) => {
      state.requesting = true;
      state.success = false;
      state.error = '';
    },
    projectsGetSuccess: (state, action) => {
      state.requesting = false;
      state.success = true;
      state.projects = action.payload;
    },
    projectsGetError: (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    },
    createProjectRequesting: (state) => {
      state.requesting = true;
      state.success = false;
      state.error = '';
    },
    createProjectSuccess: (state, action) => {
      state.requesting = false;
      state.success = true;
      state.projects.push(action.payload);
    },
    createProjectError: (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    },
    projectsResetStates: (state) => {
      state.requesting = false;
      state.success = false;
      state.error = '';
    },
    deleteProjectRequesting: (state) => {
      state.requesting = true;
      state.success = false;
      state.error = '';
    },
    deleteProjectSuccess: (state, action) => {
      state.requesting = false;
      state.success = true;
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    deleteProjectError: (state, action) => {
      state.requesting = false;
      state.error = action.payload;
    },
  },
});

export const {
  projectsGetRequesting,
  projectsGetSuccess,
  projectsGetError,
  createProjectRequesting,
  createProjectSuccess,
  createProjectError,
  projectsResetStates,
  deleteProjectRequesting,
  deleteProjectSuccess,
  deleteProjectError,
} = projectsSlice.actions;

export default projectsSlice.reducer;

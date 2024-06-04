import { call, all, put, takeEvery } from 'redux-saga/effects';
import { ROUTE_ENDPOINT } from '../../utils/route';
import {
  projectsGetRequesting,
  projectsGetSuccess,
  projectsGetError,
  createProjectRequesting,
  createProjectSuccess,
  createProjectError,
  deleteProjectRequesting,
  deleteProjectSuccess,
  deleteProjectError,
  projectsResetStates,
} from './slice';

const projectsUrl = `${ROUTE_ENDPOINT}/projects`;

const fetchProjectsApi = async () => {
  return fetch(`${projectsUrl}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => { throw error });
};

const createProjectApi = async (project) => {
  return fetch(`${projectsUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then(response => response.json())
    .catch(error => { throw error });
};

function* fetchProjectsFlow() {
  try {
    const projects = yield call(fetchProjectsApi);
    yield put(projectsGetSuccess(projects));
    yield put(projectsResetStates());
  } catch (error) {
    yield put(projectsGetError(error));
  }
}

function* createProjectFlow(action) {
  try {
    const newProject = yield call(createProjectApi, action.payload);
    console.log(newProject)
    yield put(createProjectSuccess(newProject));
    yield put(projectsResetStates());
  } catch (error) {
    yield put(createProjectError(error));
  }
}

const deleteProjectApi = async (projectId) => {
  return fetch(`${projectsUrl}/${projectId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => { throw error });
};

function* deleteProjectFlow(action) {
  try {
    yield call(deleteProjectApi, action.payload);
    yield put(deleteProjectSuccess(action.payload));
    yield put(projectsResetStates());
  } catch (error) {
    yield put(deleteProjectError(error));
  }
}

function* projectsWatcher() {
  yield all([
    takeEvery(projectsGetRequesting.type, fetchProjectsFlow),
    takeEvery(createProjectRequesting.type, createProjectFlow),
    takeEvery(deleteProjectRequesting.type, deleteProjectFlow),
    ])
}

export default projectsWatcher;

import { call, all, put, takeEvery } from 'redux-saga/effects';
import { ROUTE_ENDPOINT } from "../../utils/route";
import { 
  usersGetRequesting,
  usersGetSuccess,
  usersGetError,
  usersResetStates,
  createUserRequesting,
  createUserSuccess,
  createUserError,
  deleteUserRequesting,
  deleteUserSuccess,
  deleteUserError,
} from "./slice";

const usersUrl = `${ROUTE_ENDPOINT}/users`;

const usersApi = async () => {
  return fetch(`${usersUrl}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => {
      if (response.status === 500) throw "Error interno del servidor";
      return response.json();
    })
    .then(json => {
      if (json) return json;
      throw json;
    })
    .catch((error) => {
      throw error;
    });
};

const createUserApi = async (user) => {
  return fetch(`${usersUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      if (response.status === 500) throw "Error interno del servidor";
      return response.json();
    })
    .then(json => {
      if (json) return json;
      throw json;
    })
    .catch((error) => {
      throw error;
    });
};

function* usersFlow(action) {
  try {
    const users = yield call(usersApi);
    yield put(usersGetSuccess(users));
    yield put(usersResetStates());
  } catch (error) {
    yield put(usersGetError(error));
  }
}

function* createUserFlow(action) {
  try {
    const newUser = yield call(createUserApi, action.payload);
    yield put(createUserSuccess(newUser));
    yield put(usersResetStates());
  } catch (error) {
    yield put(createUserError(error));
  }
}

const deleteUserApi = async (userId) => {
  return fetch(`${usersUrl}/${userId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.status === 500) throw "Error interno del servidor";
      return response.json();
    })
    .then(json => {
      if (json) return json;
      throw json;
    })
    .catch((error) => {
      throw error;
    });
};

function* deleteUserFlow(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put(deleteUserSuccess(action.payload));
    yield put(usersResetStates());
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

function* usersWatcher() {
  yield all([
    takeEvery(usersGetRequesting.type, usersFlow),
    takeEvery(createUserRequesting.type, createUserFlow),
    takeEvery(deleteUserRequesting.type, deleteUserFlow),
  ]);
}

export default usersWatcher;

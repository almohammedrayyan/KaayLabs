import {
    takeLatest,
    take,
    put,
    call,
    fork,
    all,
    takeEvery,
    delay,
  } from "redux-saga/effects";
  import {
    loadUsersSuccess,
    loadUsersError,
    searchStartSuccess,searchStartError
  } from "./action";
  import {
    loadUsersApi,
   
    searchApi,
  } from "./api";
  
  import * as types from "./actionType";
  
  function* onLoadUsersStartAsync({payload:{start,end,currentPage}}) {
    try {
      const response = yield call(loadUsersApi,start,end);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadUsersSuccess({users:response.data,currentPage}));
      }
    } catch (error) {
      yield put(loadUsersError(error.response.data));
    }
  }
 function* onSearchUsersStartAsync({ payload:query }) {
    try {
      const response = yield call(searchApi, query);
      if (response.status === 200) {
     
        yield put(searchStartSuccess(response.data));
      }
    } catch (error) {
      yield put(searchStartError(error.response.data));
    }
  }
  
 function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
  }
 function* onSearchUsers() {
    yield takeLatest(types.SEARCH_USER_START, onSearchUsersStartAsync);
  }
  
  const userSagas = [
    fork(onLoadUsers),
    fork(onSearchUsers)
   
  ];
  
  export default function* rootSaga() {
    yield all([...userSagas]);
  }
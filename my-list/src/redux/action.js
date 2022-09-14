import * as types from "./actionType";
import axios from "axios";

export const loadUsersStart = (pageInfo) => ({
  type: types.LOAD_USERS_START,
  payload: pageInfo,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});
export const searchUserStart = (query) => ({
    type: types.SEARCH_USER_START,
    payload: query
  });
  
  export const searchStartSuccess = (users) => ({
    type: types.SEARCH_USER_SUCCESS,
    payload: users
  });
  
  export const searchStartError = (error) => ({
    type: types.SEARCH_USER_ERROR,
    payload: error,
  });



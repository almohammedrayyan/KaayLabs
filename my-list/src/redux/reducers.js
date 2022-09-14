import * as types from "./actionType";
const initialState = {
  users: [],
  user: {},
  loading: false,
  pageLimit: 10,
  currentPage: 0,
  paginationMode: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    
    case types.SEARCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
        return {
            ...state,
            users: action.payload.users,
            currentPage: state.currentPage + action.payload.currentPage,
            loading: false,
          };
    case types.SEARCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.LOAD_USERS_ERROR:
   
    case types.SEARCH_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
   
    default:
      return state;
  }
};

export default usersReducers;
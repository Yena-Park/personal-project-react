import { USER_ACTION_TYPES } from './user.actions';

export const INITIAL_STATE = {
  user: null,
  userError: null,
  repositories: [],
  repositoriesError: null,
  events: [],
  eventsError: null,
};

const reducer = (state = INITIAL_STATE, action ={}) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SEARCH_USER_REQUEST:
      return {
        ...state,
        user: null,
        userError: null,
      };
    case USER_ACTION_TYPES.SEARCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case USER_ACTION_TYPES.SEARCH_USER_FAILURE:
      return {
        ...state,
        user: null,
        userError: action.error
      };
    case USER_ACTION_TYPES.USER_REPO_REQUEST: 
      return {
        ...state,
        repositories: [],
        repositoriesError: null
      };
    case USER_ACTION_TYPES.USER_REPO_SUCCESS:
      return {
        ...state,
        repositories: action.repositories
      };
    case USER_ACTION_TYPES.USER_REPO_FAILURE:
      return {
        ...state,
        repositoriesError: action.error
      };
    case USER_ACTION_TYPES.USER_EVENTS_REQUEST:
      return {
        ...state,
        events: [],
        eventsError: null
      }
    case USER_ACTION_TYPES.USER_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events
      }
    case USER_ACTION_TYPES.USER_EVENTS_FAILURE:
      return {
        ...state,
        eventsError: action.error
      }
    default: {
      return state;
    }
  }
};

export default reducer;

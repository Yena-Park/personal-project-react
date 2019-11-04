export const USER_ACTION_TYPES = {
  SEARCH_USER_REQUEST: 'SEARCH_USER_REQUEST',
  SEARCH_USER_SUCCESS: 'SEARCH_USER_SUCCESS',
  SEARCH_USER_FAILURE: 'SEARCH_USER_FAILURE',

  USER_REPO_REQUEST: 'USER_REPO_REQUEST',
  USER_REPO_SUCCESS: 'USER_REPO_SUCCESS',
  USER_REPO_FAILURE: 'USER_REPO_FAILURE',

  USER_EVENTS_REQUEST: 'USER_EVENTS_REQUEST',
  USER_EVENTS_SUCCESS: 'USER_EVENTS_SUCCESS',
  USER_EVENTS_FAILURE: 'USER_EVENTS_FAILURE',
};

export const searchUserAction = username => async dispatch => {
  try {
    dispatch({ type: USER_ACTION_TYPES.SEARCH_USER_REQUEST })
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    dispatch({
      type: USER_ACTION_TYPES.SEARCH_USER_SUCCESS,
      user
    })
  } catch(e) {
    dispatch({
      type: USER_ACTION_TYPES.SEARCH_USER_FAILURE,
      error: e
    })
  }
};

export const getUserRepositoriesAction = (username) => async dispatch => {
  try {
    dispatch({ type: USER_ACTION_TYPES.USER_REPO_REQUEST })
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repositories = await response.json();
    console.log('#####', repositories); // delete
    dispatch({
      type: USER_ACTION_TYPES.USER_REPO_SUCCESS,
      repositories: repositories.filter(repo => repo.fork)
    })
  } catch(e) {
    console.log('#####', e); // delete
    dispatch({
      type: USER_ACTION_TYPES.USER_REPO_FAILURE,
      error: e
    })
  }
};

export const getUserEventsAction = (username) => async dispatch => {
  try {
    dispatch({ type: USER_ACTION_TYPES.USER_EVENTS_REQUEST })
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const events = await response.json();
    console.log('@', events); // delete
    dispatch({
      type: USER_ACTION_TYPES.USER_EVENTS_SUCCESS,
      events: events.filter(event => event.type === 'PullRequestEvent')
    })
  } catch(e) {
    console.log('@', e); // delete
    dispatch({
      type: USER_ACTION_TYPES.USER_EVENTS_FAILURE,
      error: e
    })
  }
}

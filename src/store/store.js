import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import userReducer from './user.reducer';
import { composeWithDevTools } from "redux-devtools-extension";

// Create a redux store with the catFactsReducer
// Add Redux middleware:
//    - thunks
export const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

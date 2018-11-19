import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import golfReducer from '../reducers/golfReducer';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer, 
      golf: golfReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

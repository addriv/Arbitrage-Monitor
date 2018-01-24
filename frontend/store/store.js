import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import root_reducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.RAILS_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export const configureStore = (preloadedState) => (
  createStore(root_reducer, preloadedState, applyMiddleware(...middlewares))
);
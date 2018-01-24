import { combineReducers } from 'redux';
import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;
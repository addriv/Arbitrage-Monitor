import { combineReducers } from 'redux';
import intraReducer from './intra/intra_reducer';

const arbitrageReducer = combineReducers({
  intra: intraReducer
});

export default arbitrageReducer;
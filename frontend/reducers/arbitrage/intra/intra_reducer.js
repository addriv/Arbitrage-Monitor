import { combineReducers } from 'redux';
import intraKucoinReducer from './intra_kucoin_reducer';

const intraReducer = combineReducers({
  intra: intraKucoinReducer
});

export default intraReducer;
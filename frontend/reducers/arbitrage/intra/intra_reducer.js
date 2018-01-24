import { combineReducers } from 'redux';
import intraKucoinReducer from './intra_kucoin/intra_kucoin_reducer';

const intraReducer = combineReducers({
  kucoin: intraKucoinReducer
});

export default intraReducer;
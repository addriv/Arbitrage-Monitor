import { combineReducers } from 'redux';
import kucoinBTCPairsReducer from './kucoin_btc_pairs_reducer';

const intraKucoinReducer = combineReducers({
  BTCPairs: kucoinBTCPairsReducer
});

export default intraKucoinReducer;
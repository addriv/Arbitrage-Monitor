import { combineReducers } from 'redux';
import kucoinBTCPairsReducer from './kucoin_btc_pairs_reducer';
import kucoinNEOPairsReducer from './kucoin_neo_pairs_reducer';

const kucoinRatiosReducer = combineReducers({
  BTCPairs: kucoinBTCPairsReducer,
  NEOPairs: kucoinNEOPairsReducer
});

export default kucoinRatiosReducer;
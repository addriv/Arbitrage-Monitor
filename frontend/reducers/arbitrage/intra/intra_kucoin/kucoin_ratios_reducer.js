import { combineReducers } from 'redux';
import kucoinBTCPairsReducer from './kucoin_btc_pairs_reducer';
import kucoinNEOPairsReducer from './kucoin_neo_pairs_reducer';
import kucoinETHPairsReducer from './kucoin_eth_pairs_reducer';

const kucoinRatiosReducer = combineReducers({
  BTCPairs: kucoinBTCPairsReducer,
  NEOPairs: kucoinNEOPairsReducer,
  ETHPairs: kucoinETHPairsReducer
});

export default kucoinRatiosReducer;
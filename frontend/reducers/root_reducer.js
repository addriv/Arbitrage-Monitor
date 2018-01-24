import { combineReducers } from 'redux';
import uiReducer from './ui/ui_reducer';
import arbitrageReducer from './arbitrage/arbitrage_reducer';

const rootReducer = combineReducers({
  arbitrage: arbitrageReducer,
  ui: uiReducer
});

export default rootReducer;
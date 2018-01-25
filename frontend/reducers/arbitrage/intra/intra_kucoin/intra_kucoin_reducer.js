import { combineReducers } from 'redux';
import kucoinRatiosReducer from './kucoin_ratios_reducer';
import kucoinVehiclesReducer from './kucoin_vehicles_reducer';

const intraKucoinReducer = combineReducers({
  vehicles: kucoinVehiclesReducer,
  ratios: kucoinRatiosReducer
});

export default intraKucoinReducer;
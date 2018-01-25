import { 
  RECEIVE_KUCOIN_NEO_RATIO 
} from "../../../../actions/intra/intra_kucoin_actions";

const _defaultState = {
  'DBC-NEO': null
};

const kucoinNEOPairsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_KUCOIN_NEO_RATIO:
      const newState = Object.assign({}, state);
      newState[action.symbol] = action.ratio;
      return newState;
    default:
      return state;
  }
};

export default kucoinNEOPairsReducer;
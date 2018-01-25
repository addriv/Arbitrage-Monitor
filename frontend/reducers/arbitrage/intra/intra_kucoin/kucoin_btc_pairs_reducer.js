import { RECEIVE_KUCOIN_RATIO } from "../../../../actions/intra/intra_kucoin_actions";

const _defaultState = {
  'ETH-BTC': null,
  'NEO-BTC': null,
  'KCS-BTC': null,
  'BCH-BTC': null
};

const kucoinBTCPairsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_KUCOIN_RATIO:
      const newState = Object.assign({}, state);
      newState[action.symbol] = action.ratio;
      return newState;
    default:
      return state;
  }
};

export default kucoinBTCPairsReducer;
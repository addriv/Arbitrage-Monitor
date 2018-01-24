const _defaultState = {
  'ETH-BTC': null,
  'NEO-BTC': null,
  'KCS-BTC': null,
  'BCH-BTC': null
};

const kucoinBTCPairsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default kucoinBTCPairsReducer;
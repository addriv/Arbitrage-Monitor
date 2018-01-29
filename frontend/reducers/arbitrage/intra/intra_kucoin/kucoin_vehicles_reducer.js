const _defaultState = {
  'DBC': ['BTC', 'ETH', 'NEO'],
  'RPX': ['BTC', 'ETH', 'NEO', 'KCS'],
  'LTC': ['BTC', 'ETH', 'NEO']
};

const kucoinNEOPairsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default kucoinNEOPairsReducer;
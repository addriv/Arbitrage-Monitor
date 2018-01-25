const _defaultState = [
  'DBC'
];

const kucoinNEOPairsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default kucoinNEOPairsReducer;
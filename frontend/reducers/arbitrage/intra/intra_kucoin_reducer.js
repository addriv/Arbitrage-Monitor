const _defaultState = {};

const intraKucoinReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default intraKucoinReducer;
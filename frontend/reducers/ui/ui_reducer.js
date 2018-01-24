const _defaultState = {};

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;  
  }
};

export default uiReducer;
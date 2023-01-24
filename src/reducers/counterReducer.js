const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.counter + 1;

    default:
      return state.counter;
  }
};

export default counterReducer;

const actions = (state, action) => {
  switch (action) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      throw new Error("operation not allowed");
  }
};

export default actions;

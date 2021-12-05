import { createStore } from "redux";

const counterReducer = (state = { isLoggedIn: false }, action) => {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: true,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

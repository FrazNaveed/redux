import { act } from "react-dom/test-utils";

const initialState = 2;

const increaseTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default increaseTheNumber;

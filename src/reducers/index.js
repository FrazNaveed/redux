import { combineReducers } from "redux";
import increaseTheNumber from "./upDown";

const reducers = combineReducers({
  change: increaseTheNumber,
});

export default reducers;

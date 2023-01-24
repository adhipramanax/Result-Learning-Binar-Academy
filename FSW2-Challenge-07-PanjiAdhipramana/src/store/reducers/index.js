// Import Module Combine Reducers
import { combineReducers } from "redux";

// Import Reducers
import CarReducers from "./CarReducers";

const reducers = combineReducers({
  cars: CarReducers,
});

export default reducers;

import { createStore } from "redux";
import reducers from "./reducers/CarReducers";

const store = createStore(reducers);

export default store;

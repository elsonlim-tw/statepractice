import { createStore, combineReducers } from "redux";
import todoActions from "./todoReducer";

const reducers = combineReducers({
  todoActions,
});

export default createStore(reducers);

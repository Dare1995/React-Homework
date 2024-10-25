import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import characterReducer from "./reducers/characterReducer";

const rootReducer = combineReducers({
  characters: characterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
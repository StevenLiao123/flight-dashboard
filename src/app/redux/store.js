/*
    A store holds the whole state tree of the application
*/

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import combinedReducer from "./combinedReducer";

export default createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
);

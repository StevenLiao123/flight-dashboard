/*
    The reducer is a function, which used to return new state based on the prevState and actions
*/
import { combineReducers } from "redux";
import { displayConsoleReducer } from "../DisplayConsole";

export default combineReducers({ displayConsole: displayConsoleReducer });

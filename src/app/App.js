import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import DisplayConsole from "./DisplayConsole";
import ControlConsole from "./ControlConsole";
import store from "./redux/store";

export default () => {
  return (
    <Provider store={store}>
      <div className="app">
        <DisplayConsole />
        <ControlConsole />
      </div>
    </Provider>
  );
};

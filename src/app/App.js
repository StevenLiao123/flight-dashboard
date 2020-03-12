import React from 'react';
import './App.css';
import DisplayConsole from './DisplayConsole';
import ControlConsole from './ControlConsole';

export default () => {
  return (
    <div className="app">
      <DisplayConsole/>
      <ControlConsole/>
    </div>
  );
};

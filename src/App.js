import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import DashedBox from './DashedBox';
import OutsetBox from './OutsetBox';
import DottedBox from './DottedBox';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Styling React</h2>
    </div>
    <Box />
    <DashedBox />
    <OutsetBox />
    <DottedBox />
  </div>
);

export default App;

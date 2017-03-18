import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './Box'
import DashedBox from './DashedBox'
import OutsetBox from './OutsetBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Styling React</h2>
        </div>
        <div className="App-wrapper-intro">
          <p className="App-intro">
            Get started with Css styling.
          </p>
        </div>
        <Box />
        <DashedBox />
        <OutsetBox />
      </div>
    )
  }
}

export default App

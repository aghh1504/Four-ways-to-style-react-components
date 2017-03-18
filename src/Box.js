import React, { Component } from 'react'

const divStyle = {
  margin: '40px',
  border: '5px solid pink',
  height: '70px'
}
const pStyle = {
  fontSize: '15px',
  color: 'pink'
}

class Box extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={pStyle}>Get started with inline style</p>
      </div>
    )
  }
}

export default Box

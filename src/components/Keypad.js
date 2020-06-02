import React, { Component } from 'react'

export class Keypad extends Component {
  eventHandler = () =>{
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.eventHandler}/> 
      </div>
    )
  }
}

export default Keypad


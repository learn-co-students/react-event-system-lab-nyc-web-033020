import React from 'react'
// Code Keypad Component Here
export default class Keypad extends React.Component {

  render() {
    return (
      <input
        type="password"
        onKeyUp={() => console.log('Entering password...')}
      />
    )
  }
}
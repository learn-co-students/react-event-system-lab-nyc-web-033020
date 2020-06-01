import React from 'react'

// Code EyesOnMe Component Here

export default class EyesOnMe extends React.Component {
  render() {
    return (
      <button
        onFocus={() => console.log('Good!')}
        onBlur={() => console.log('Hey! Eyes on me!')}
      >Touch me baby</button>
    )
  }
}
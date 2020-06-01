// Code Keypad Component Here
import React, { Component } from 'react'

const enteringPassword = (event) => {
    console.log("Entering password...")
}

export default class Keypad extends Component {
    render() {
        return <input onKeyUp={enteringPassword} type="password" placeholder="Enter password at your own risk..." />
    }
}
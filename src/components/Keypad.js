import React, { Component } from 'react'

export class Keypad extends Component {
    handleInputPassword = (e) => {
        console.log("Entering password...")
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.handleInputPassword} type="password" />
            </div>
        )
    }
}

export default Keypad


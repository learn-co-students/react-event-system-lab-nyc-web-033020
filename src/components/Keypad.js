// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    userConsoleMessage = () => console.log('Entering password...')

    render(){
        return(
            <div>
                <input type='password' 
                onKeyUp = {this.userConsoleMessage}/>
            </div>
        )
    }
}

export default Keypad
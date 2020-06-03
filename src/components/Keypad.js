// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    
    // helper function
    keyUp = () => console.log('Entering password...')

    render(){
        return(
            <input type="password" onKeyUp={this.keyUp}/>
        )
    }
}
export default Keypad
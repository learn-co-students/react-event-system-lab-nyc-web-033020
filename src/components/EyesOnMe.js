// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
    focusGood = () => console.log('Good!')
    blurEyes = () => console.log('Hey! Eyes on me!')
    render(){
        return(
            <button onFocus={this.focusGood} onBlur={this.blurEyes}>Button</button>
        )
    }
}
export default EyesOnMe
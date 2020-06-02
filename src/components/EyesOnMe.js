// Code EyesOnMe Component Here
import React from 'react'
class EyesOnMe extends React.Component{
    userFocusMessage = () => console.log('Good!')
    userBlurMessage = () => console.log('Hey! Eyes on me!')

    render(){
        return(
            <button 
            onBlur={this.userBlurMessage}
            onFocus={this.userFocusMessage}
            >
            Submit </button>
        )
    }
}

export default EyesOnMe
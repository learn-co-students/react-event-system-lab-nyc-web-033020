import React from 'react';

export default class Keypad extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1> Hello World from Keypad! </h1>
                <input onKeyUp={()=> console.log('Entering password...')} type="password" />
            </React.Fragment>
        )
    }
}
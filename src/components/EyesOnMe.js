// Code EyesOnMe Component Here
import React, { Component } from "react";

const focusHandler = (event) => {
    console.log('Good!') 
}

const blurHandler = (event) => {
    console.log('Hey! Eyes on me!')
}

export default class EyesOnMe extends Component {

    render() {
        return (
            <button onFocus={focusHandler} onBlur={blurHandler} >Focus on Me!</button>
        )
    }
}
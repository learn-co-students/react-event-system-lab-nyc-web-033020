import React from 'react';

export default class EyesonMe extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1> Hello World from EyesonMe! </h1>
                <button
                    onFocus={() => console.log('Good!') }
                    onBlur={()=> console.log('Hey! Eyes on me!')}
                > Look at me!
                    </button>
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(){
    super();
    this.state = {color: "red"}; // components properties are stored in state as an object
    }
    render() {
        return (
            <div>
                <p>I am a {this.state.color} Car!</p>
            </div>
        )
    }
}



export default ClassComponent

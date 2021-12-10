import React, { Component } from 'react'



//we can also handle properties of component using props 
export class Car extends Component {
   constructor(props){
       super(props);
       this.state = {model:"Mercedes", color:"White"};
       };
   
 changecolor = () =>{
     this.setState({color:"Blue"}) //setState is used to update the state property when change color function is called i.e onclick
 }
    render() {
        return (
            <div>
               <p>This is a {this.state.model} car</p>
               <li>It is {this.state.color} car</li>
               <button onClick={this.changecolor}>click</button> 
            </div>
        )
    }
}

export default Car

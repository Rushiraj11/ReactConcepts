import React from 'react'


export default function FunctionalComponent() {
    const[color,setColor]=React.useState("red")
    //color is the state and setColor is the function used to update the state and to initialize state we use "useState"for function component
    return (
        <div>
            <h1>This is {color}</h1>
            <button onClick={()=>setColor("White")}>click</button>
        </div>
    )
}

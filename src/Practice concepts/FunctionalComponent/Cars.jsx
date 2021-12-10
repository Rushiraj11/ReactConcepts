import React from 'react'

export default function Cars() {
 const[car,setCar]=React.useState({
     color: "Black",
     model: "Audi",
     year: "2020",
 }
 )

 const updatecolor=()=>{
     setCar(previousState =>{
         return{...previousState, color:"Blue"}
     }
        )

 }

    return (
        <div>
            <p>This is a {car.model} {car.color}car  </p>
            <button onClick={updatecolor}> click </button>
            <p>The manufacturing of car is{car.year}</p>
        </div>
    )
}

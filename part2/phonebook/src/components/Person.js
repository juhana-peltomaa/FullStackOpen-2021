import React from 'react'

const Person = (props) => {
    return(
    <div>
      {props.name} {props.number} <button value={props.name} number={props.number} id={props.id} onClick={props.onClick}>delete</button>
      
    </div>
    )
    
  }

  export default Person
  
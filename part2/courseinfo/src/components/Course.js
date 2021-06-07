import React from 'react'

const Header = (props) => {
    return(
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
  }
  
  const Part = (props) => {
    return(
        <p>{props.part} {props.exercises}</p>
    )
  }
  
  const Content = (props) => {
  
    return(
      <div>
        {props.part.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      </div>
    )
  }
  
  const Total = props => {
  
    const total = props.part.parts.reduce(
      (sum, amount) => sum + amount.exercises,
      0
    );
    return <p><strong> total of {total} exercises </strong></p>;
  };


const Course = ({ course }) => {
    return (
    <div>
      <Header course={course} />
      <Content part={course.parts}/>
      <Total part={course}/>
    </div>
  
    )
  }

  export default Course
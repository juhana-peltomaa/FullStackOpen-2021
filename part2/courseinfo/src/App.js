import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
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
    <Header key={course.id} course={course} />
    <Content part={course.parts}/>
    <Total part={course}/>
  </div>

  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
    <Course course={course} />
    </div>
    )
  }

export default App
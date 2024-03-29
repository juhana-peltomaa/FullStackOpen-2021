import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
 

  const copy = [...points]
  const setToSelected = (newAnecdote) => {
    setSelected(newAnecdote)
  }

  const setToPoints = (newVote) => {
    console.log(copy)
    copy[newVote]+=1
    setPoints(copy)
  }

  function getArrayMax(array){
    return Math.max.apply(null, array);
 }

  const mostPoints = getArrayMax(points)
  const indexMostPoints = points.indexOf(mostPoints)

  return (
    <div>
      <h2>Anexdote of the day</h2>
      <p>{anecdotes[selected]} 
      <br></br>
      has {points[selected]} votes</p>
      <Button handleClick={() => setToSelected(getRandomInt(0, anecdotes.length))} text="next anecdote"  />
      <Button handleClick={() => setToPoints(selected)} text="vote" />
      <h2>Anexdote with the most votes</h2>
      <p>{ anecdotes[indexMostPoints] }
      <br></br>
      has {mostPoints} votes</p>
    </div>
  )
}

export default App

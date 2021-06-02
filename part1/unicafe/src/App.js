import React, { useState } from 'react'

const Display = (promps) => {
  return <div>{promps.text} {promps.value}</div>
}

const Header = ({ value }) => (
  <h1>{value}</h1>
)

const Button = (promps) => (
  <button onClick={promps.handleClick}>
    {promps.text}
  </button>
)



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }


  return (
    <div>
      <Header value="give feedback" />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header value="statistics" />
      
      <Display value={good} text="good" />
      <Display value={neutral} text="neutral" />
      <Display value={bad} text="bad" />
    </div>
  )
}

export default App
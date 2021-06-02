import React, { useState } from 'react'

const Display = (promps) => {
  if (promps.text === "positive")  {
    return (
      <div>
         {promps.text} {100 * promps.value} % 
      </div>
    )
  }
return (
    <div>
      {promps.text} {promps.value}
    </div>
  )
}

const Header = ({ value }) => (
  <h1>{value}</h1>
)

const Button = (promps) => (
  <button onClick={promps.handleClick}>
    {promps.text}
  </button>
)

const Statistics = (promps) => {
  console.log(promps)
  return (
      <div>
        <p> good {promps.good} </p>
        <p> neutral {promps.neutral}</p>
        <p> bad {promps.bad}</p>
        <p> all {promps.all}</p>
        <p> average {promps.average}</p>
        <p> positive {promps.positive * 100} %</p>
      </div>
      )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allReviews, setAll] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
    setAll(allReviews + 1)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)

    setAll(allReviews + 1)

  }

  const setToBad = newValue => {
    setBad(newValue)
    setAll(allReviews + 1)
  }


  let values = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: allReviews,
    average: (good-bad)/allReviews,
    positive: good/allReviews
  }

  return (
    
    <div>
      <Header value="give feedback" />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Header value="statistics" />
      <Statistics {...values} />
    </div>
  )
}

export default App
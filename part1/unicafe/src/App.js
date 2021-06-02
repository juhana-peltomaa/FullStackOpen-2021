import React, { useState } from 'react'

const Header = ({ value }) => (
  <h1>{value}</h1>
)

const Button = (promps) => (
  <button onClick={promps.handleClick}>
    {promps.text}
  </button>
)

const Statistics = (promps) => {
  if (promps.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={promps.good} />
        <Statistic text="neutral" value={promps.neutral}/>
        <Statistic text="bad" value={promps.bad}/>
        <Statistic text="all" value={promps.all}/>
        <Statistic text="average" value={promps.average}/>
        <Statistic text="positive" value={promps.positive * 100}/>
        </tbody>
    </table> 
      )
}

const Statistic = (promps) => {
  if (promps.text === "positive") {
    return <tr>
      <td>{promps.text}</td><td>{promps.value} %</td>
    </tr>
  }
  return <tr>
    <td>{promps.text}</td><td>{promps.value}</td>
  </tr>
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
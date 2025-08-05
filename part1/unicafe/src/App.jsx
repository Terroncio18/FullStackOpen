import { useState } from 'react'

const Button = ({ name, counter, setCounter }) => {
  const handleClicks = () => {
    setCounter(counter + 1)
  }
  return (
    <button onClick={handleClicks}>{name}</button>
  )
}

const Title = ({ title }) => {

  return (
    <h1>{title}</h1>
  )
}

const StatisticsLine = ({ text, value }) => {


  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  let total = good + neutral + bad
  let average = (good - bad) / total
  let positive = (good / total) * 100
  if (total == 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={total} />
            <StatisticsLine text="average" value={average.toFixed(1)} />
            <StatisticsLine text="positive" value={positive.toFixed(1) + ' %'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" counter={good} setCounter={setGood} />
      <Button name="neutral" counter={neutral} setCounter={setNeutral} />
      <Button name="bad" counter={bad} setCounter={setBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state

  const data =[
    {
      titulo: "give feedback",
      titulo2: "statistics"
    }
  ]

  const [ contador, setcontador ] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  })

  const handleclickGood = () => {
    setcontador({
      ...contador,
      Good: contador.Good + 1,
    })
  }
  const handleclickNeutral = () => {
    setcontador({
      ...contador,
      Neutral: contador.Neutral + 1,
    })
  }
  const handleclickBad = () => {
    setcontador({
      ...contador,
      Bad: contador.Bad + 1,
    })
  }
  const Total =[
    {
      tota: contador.Bad + contador.Good + contador.Neutral,
    }
  ]
  const Porcentaje =[
    {
      porcentaje: contador.Good /100
    }
  ]
  return(
    <div>
      <button onClick={handleclickGood}>Good!!</button>
      <button onClick={handleclickNeutral}>Neutral!!</button>
      <button onClick={handleclickBad}>Bad!!</button>
      <Statistics data={data}/>
      <p>Neutral {contador.Neutral}</p>
      <p>Good {contador.Good}</p>
      <p>Bad  {contador.Bad}</p>
      <p>All  {Total[0].tota}</p>
      <p>Positive  {Porcentaje[0].porcentaje}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
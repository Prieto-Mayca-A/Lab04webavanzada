import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <p><h1>{data[0].titulo}</h1></p>
      <button onClick={handleclickGood}>Good!!</button>
      <button onClick={handleclickNeutral}>Neutral!!</button>
      <button onClick={handleclickBad}>Bad!!</button>
      <p><h2>{data[0].titulo2}</h2></p>
      <p>Neutral {contador.Neutral}</p>
      <p>Good {contador.Good}</p>
      <p>Bad  {contador.Bad}</p>
      <p>All  {Total[0].tota}</p>
      <p>Positive  {Porcentaje[0].porcentaje}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
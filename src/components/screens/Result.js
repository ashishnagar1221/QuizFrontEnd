import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = (props) => {
    let score = useLocation()
    console.log(score.state.score)
  return(
    <div>Result
        <div>
        <h3>Your Score </h3>
        <h6>{score.state.score}/5</h6>
        </div>
    </div>
    
   )

 }

export default Result
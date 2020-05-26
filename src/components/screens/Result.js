import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Result = (props) => {
    let score = useLocation()
    console.log(score.state.score)
    const [res,setRes] = useState([])
    const [answerSheet,SetAnswerSheet] = useState([])
    
    useEffect (() =>{
      fetch('https://quizaap.herokuapp.com/result',{
        method:"post",
      headers : { 
        "Content-Type":"application/json",
        'Accept': 'application/json',
        'Authorization':"Bearer "+ localStorage.getItem('jwt')
      },
      body:JSON.stringify({
        user:score.state.score
    })
    })
    .then(res => res.json())
    .then(result =>{
        setRes(result)
        SetAnswerSheet(result.answerTally)
    })
  },[]) 
    
  console.log(answerSheet)
  return(
    <div>Result
        <div>
        <h3>Your Score </h3>
        <h6>{res.score}/5</h6>
        </div>
        <div>
          <table>
            <tr>
              <th>No.</th>
              <th>Question</th>
              <th>User's Choice</th>
              <th>Correct Answer</th>
            </tr>
            
              {
                answerSheet.map((ele,x) =>{
                  return(
                    <tr>
                    <td>{x+1}</td>
                    <td>{ele.question}</td>
                    <td>{ele.marked_choice}</td>
                    <td>{ele.correct_choice}</td>
                    </tr>
                  )
                })
              }
          </table>
        </div>
    </div>
    
   )

 }

export default Result
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../navbar'

const Result = (props) => {
    let score = useLocation()
    console.log(score.state)
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
        user:score.state.score,
        topic:score.state.topic
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
    <div><NavBar/>
        <div style ={{
          width:'80%',
          margin:'20px auto'
        }}>
          <div>
        <h3 style ={{textAlign:'center'}}>Your Score </h3>
        <h4 style ={{textAlign:'center'}}>{res.score}/5</h4>
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
                    <td style ={{textAlign:'center'}}>{ele.question}</td>
                    <td style ={{textAlign:'center'}}>{ele.marked_choice}</td>
                    <td style ={{textAlign:'center'}}>{ele.correct_choice}</td>
                    </tr>
                  )
                })
              }
          </table>
        </div>
        </div>
    </div>
    
   )

 }

export default Result
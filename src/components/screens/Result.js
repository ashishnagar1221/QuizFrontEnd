import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Result = (props) => {
    let score = useLocation()
    console.log(score.state.score)
    const [res,setRes] = useState([])
    
    useEffect (() =>{
      fetch('http://localhost:3600/result',{
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
    })
  },[]) 
    
  console.log(res)
  return(
    <div>Result
        <div>
        <h3>Your Score </h3>
        <h6>{res.score}/5</h6>
        </div>
    </div>
    
   )

 }

export default Result
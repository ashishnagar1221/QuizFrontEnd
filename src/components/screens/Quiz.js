import React, { useState, useEffect} from 'react'
import { useLocation, Link, Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';

const Quiz = () => {
   let data = useLocation() 
  const [allquestions,setAllquestions] = useState([])
  const [currQues,setCurQues] = useState(0)
  const [score,setScore]= useState([])

  
  useEffect (() =>{
    fetch('https://quizaap.herokuapp.com/gameStart',{
      method:"post",
    headers : { 
      "Content-Type":"application/json",
      'Accept': 'application/json'
    },
    body:JSON.stringify({
      topic:data.state._id
  })
  })
  .then(res => res.json())
  .then(result =>{
      setAllquestions(result)
  })
},[]) 

console.log(allquestions)

// const nextState = score.map(a => a.ques != ques ? [...a,{"ques":ques,"ans":x}]:a)
// setScore(nextState)
//function to combine next and score update
const next_n_score = (x,ques) =>{
  setScore(prev => [...prev,{"ques_id":ques._id,"question":ques.question,"opt":x,"ans":ques.answer}])
}
console.log(score)

if(!allquestions.length){
return(<div>
 <img src ="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt=""/>
</div>)
}
  return(  
    <div>
        <div >
          <h5>{allquestions[currQues].question}</h5>
                <button 
                  onClick={()=>{next_n_score(0,allquestions[currQues])}}
                >
                  <p>{allquestions[currQues].options[0]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(1,allquestions[currQues])}}
                >
                  <p>{allquestions[currQues].options[1]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(2,allquestions[currQues])}}
                >
                  <p>{allquestions[currQues].options[2]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(3,allquestions[currQues])}}
                >
                  <p>{allquestions[currQues].options[3]}</p>
                </button>

          <button 
          onClick ={() =>{
            if(currQues < allquestions.length -1 ){
              setCurQues(currQues+1)
            }
            }}>
              next
            </button>
          <button 
          onClick={() =>{
            if(currQues > 0 ){
              setCurQues(currQues - 1)
            }
          }}>previous</button> 
            <Link to={{ pathname: "/Result" , state: {score}}}>Submit</Link>
        </div>
    </div>  
  )
}

export default Quiz
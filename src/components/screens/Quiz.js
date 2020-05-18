import React, { useState, useEffect} from 'react'
import { useLocation, Link, Redirect } from 'react-router-dom'
import { render } from '@testing-library/react';

const Quiz = () => {
   let data = useLocation();
   //console.log(data.state._id) 
  const [allquestions,setAllquestions] = useState([])
  const [currQues,setCurQues] = useState(0)
  const [userAnswer,setUserAnswer] = useState(null)
  const [score,setScore]= useState(0)

  
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
//console.log(allquestions)
// const resultdisplay = () =>{
//     console.log(`Score is ${score}`)
// }
//console.log(userAnswer)
//function to combine next and score update
const next_n_score = (x) =>{
  if(x == allquestions[currQues].answer){
    setScore(score + 1)
  }
  if(!(currQues < allquestions.length-1)){
    //console.log("reached")
    //return(<Link to={{ pathname: "/Result" , state: {score}}}>Submit</Link>)
  }else{
    setCurQues(currQues+1)
  }
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
                  onClick={()=>{next_n_score(0)}}
                >
                  <p>{allquestions[currQues].options[0]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(1)}}
                >
                  <p>{allquestions[currQues].options[1]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(2)}}
                >
                  <p>{allquestions[currQues].options[2]}</p>
                </button>
                <button 
                  onClick={()=>{next_n_score(3)}}
                >
                  <p>{allquestions[currQues].options[3]}</p>
                </button>

          {/* <button 
          onClick ={() =>{
            if(userAnswer == allquestions[currQues].answer){
              setScore(score + 1)
              console.log(userAnswer+" ---  "+ allquestions[currQues].answer)
              console.log("CORRECT")
            }
            else {
              console.log(userAnswer+" ---  "+ allquestions[currQues].answer)
              console.log("WRONG")
            }
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
          }}>previous</button>  */}
          <button>
            <Link to={{ pathname: "/Result" , state: {score}}}>Submit</Link>
          </button> 
        </div>
    </div>  
  )
}

export default Quiz
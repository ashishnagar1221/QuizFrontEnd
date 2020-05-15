import React, { useState, useEffect } from 'react'

const Quiz = () => {
  
  const [allquestions,setAllquestions] = useState([])
  const [currQues,setCurQues] = useState(0)
  const [userAnswer,setUserAnswer] = useState(null)
  const [score,setScore]= useState(0)

  
  useEffect (() =>{
    fetch('/allquestions',{
    headers : { 
      "Content-Type":"application/json",
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(result =>{
      setAllquestions(result)
  })
},[]) 

const resultdisplay = () =>{
    return <h3>your score is {score}</h3>
}
console.log(userAnswer)

if(!allquestions.length){
return(<div>
 <img src ="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt=""/>
</div>)
}
  return(
    
    <div>
        <div >
          <h5>{allquestions[currQues].question}</h5>
                <button onClick={()=>{setUserAnswer(0)}}>
                  <p>{allquestions[currQues].options[0]}</p>
                </button>
                <button onClick={()=>{setUserAnswer(1)}}>
                  <p>{allquestions[currQues].options[1]}</p>
                </button>
                <button onClick={()=>{setUserAnswer(2)}}>
                  <p>{allquestions[currQues].options[2]}</p>
                </button>
                <button onClick={()=>{setUserAnswer(3)}}>
                  <p>{allquestions[currQues].options[3]}</p>
                </button>

          <button 
          onClick ={() =>{
            if(userAnswer == allquestions[currQues].answer){
              setScore(score + 1)
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
          }}>previous</button> 
          <button 
          onClick={() => resultdisplay()}>submit</button> 
        </div>
    </div>  
  )
}

export default Quiz
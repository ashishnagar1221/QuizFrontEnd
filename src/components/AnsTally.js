import React, { useEffect, useState } from 'react'

const Anstally = (props) => {
    const [gameHistory,setGameHistory] = useState([])
    useEffect(()=>{
        fetch('https://quizaap.herokuapp.com/gamehistory',{
            
            headers : { 
              "Content-Type":"application/json",
              'Accept': 'application/json',
              'Authorization':"Bearer "+ localStorage.getItem('jwt')
            }
          })
          .then(res => res.json())
          .then(result =>{
              setGameHistory(result)
          })
        },[])

  return(
    <table>
        <tr>
            <th>No.</th>
            <th>Topic</th>
            <th>Socre</th>
        </tr>
        
            {
                gameHistory.map((ele,x) =>{
                    return(
                        <tr>
                        <td>{x}</td>
                        <td>{ele.id}</td>
                        <td>{ele.score}</td>
                        </tr>
                    )
                })
            }
        
    </table>
   )

 }

export default Anstally
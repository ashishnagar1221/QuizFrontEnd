import React, { useEffect, useState } from 'react'

const Anstally = (props) => {
    const [gameHistory,setGameHistory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3600/gamehistory',{
            
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
    <table className='tablec' style ={{
        margin: '0 auto',
        boxSizing:"border-box",
        width:"80%"
        }}>
            <thead>
            <tr style={{display: 'block'}}>
                <th>No.</th>
                <th>Topic</th>
                <th>Socre</th>
            </tr>
            </thead>
            <tbody style={{
                overflow: 'auto',
                display: 'block',
                height: '260px'
                }}>
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
            </tbody>       
    </table>
   )

 }

export default Anstally
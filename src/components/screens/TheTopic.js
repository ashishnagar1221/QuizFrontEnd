import React, { useState, useEffect } from 'react'

const TheTopic = (props) => {
    const [thistopic,setThistopic] = useState([])
    useEffect(() => {
        fetch('http://localhost:3600/topic',{
          headers:{
            "Content-Type":"application/json",
            'Authorization':"Bearer "+ localStorage.getItem('jwt')
          }
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            setThistopic(result)
        })
      },[])

      console.log(thistopic)
  return(
    <div>
      <div>
        <img style ={{width:"250px",height:"250px",borderRadius:"4px"}}
          src ="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
      </div>
    </div>
   )

 }

export default TheTopic
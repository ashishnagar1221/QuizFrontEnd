import React, { useState, useEffect } from 'react'
import {useLocation, Link} from "react-router-dom"

const TheTopic = (props) => {
    let data = useLocation();
    console.log(data.state._id)
    const [thistopic,setThistopic] = useState([])
    useEffect(() => {
        fetch('https://quizaap.herokuapp.com/topic',{
          method:"post",
          headers:{
            "Content-Type":"application/json",
            'Authorization':"Bearer "+ localStorage.getItem('jwt')
          },
          body:JSON.stringify({
            _id:data.state._id
        })
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            setThistopic(result)
        })
      },[])

      // console.log(thistopic)
      console.log(thistopic._id)
  return(
    <div>
      <div style={{
        display:"flex",
        width:"80%",
        justifyContent:"space-between",
        boxSizing:"content-box",
        margin:"20px auto"}}>
          <div>
          <img style ={{width:"250px",height:"250px",borderRadius:"4px"}}
          src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT4D4DnbJ7qh7BYo414BfSwNCCaaaQn7GSZgMnZ1JlfI4v37Bd&usqp=CAU"
          />
          </div>
          <div>
          <button 
          className ='btn waves-effect waves-light #c62828 blue darken-3'
          ><Link to={{ pathname: "/Quiz" , state: {_id:thistopic._id}}}>Start game</Link>
          </button>
          <button 
          className ='btn waves-effect waves-light #c62828 green darken-3'
          >Follow
          </button>
          </div>
      </div>
      <div>
        <h4>{thistopic.name}</h4>
      </div>
      <div>
        <h4>Description</h4>
        <p>{thistopic.Description}</p>
      </div>
    </div>
   )

 }

export default TheTopic
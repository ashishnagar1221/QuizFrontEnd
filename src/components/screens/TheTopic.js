import React, { useState, useEffect, useContext } from 'react'
import {useLocation, Link , useHistory} from "react-router-dom"
import {UserContext} from '../../App'
import M from 'materialize-css'
import NavBar from '../navbar'

const TheTopic = (props) => {
    let data = useLocation()
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    const [thistopic,setThistopic] = useState([])
    // console.log({"state ":state})
    // console.log({"thistopic ":thistopic})
    const test = thistopic ? state.topic_followed.includes(thistopic._id):false;
    // //const followfunc = thistopic.followedBy ? thistopic.followedBy.includes(state._id):false;
    const [toggleFollow,setToggleFollow] = useState(test ? "Unfollow":"Follow")
     console.log(test)

    useEffect(() => {
        fetch(https://quizaap.herokuapp.com/topic',{
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
            setThistopic(result)
        })
      },[])

  return(
    <div>
      <NavBar/>
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
          style={{marginRight:'50px'}}
          className ='btn waves-effect waves-light #c62828 blue darken-3'
          ><Link className ="link" to={{ pathname: "/Quiz" , state: {_id:thistopic._id,name:thistopic.name}}}>Start game</Link>
          </button>
          <button 
          className ='btn waves-effect waves-light #c62828 green darken-3'
          onClick={() =>{
            setToggleFollow(test ?"Unfollow":"Follow")
            fetch(https://quizaap.herokuapp.com/follow',{
              method:"put",
              headers : { 
                "Content-Type":"application/json",
                'Authorization':"Bearer "+ localStorage.getItem('jwt')
              },
              body:JSON.stringify({
                followId:thistopic._id
            })
            })
            .then(res => {
              M.toast({html:`status changed`})
            })
          }}
          >{toggleFollow}
          </button>
          </div>
      </div>
      <div style={{
        width:"80%",
        margin:"20px auto",
        fontFamily: "'Exo 2', sans-serif",
        textAlign:'justify'
      }}>
      <div>
        <h4 style ={{
          textAlign:'center'
        }}>{thistopic.name}</h4>
      </div>
      <div>
        
        <p>{thistopic.Description}</p>
      </div>
      </div>
    </div>
   )

 }

export default TheTopic
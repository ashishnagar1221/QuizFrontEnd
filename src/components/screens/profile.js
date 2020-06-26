import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Anstally from "../AnsTally";
import NavBar from "../navbar";

const Dashboard = () => {
    const [userdata, setUserdata] = useState([]);
    const [list,setList] = useState([])
    const [listId,setListId] = useState([])

  useEffect(() => {
    fetch("https://quizaap.herokuapp.com/userprofile",{
      headers:{
        'Authorization':"Bearer "+ localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(result =>{
        setUserdata(result)
        setList(result.tnaame)
        setListId(result.topic_followed)
    })
  },[])

 console.log(userdata.length)
  if(userdata.length != undefined ){
    return(<div>
     <img style={{
         position: 'relative',
         height:'100vh',
         width: '100%'
     }} src ="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt=""/>
    </div>)
    }


  return(
    <div>
        <NavBar/>
        <div className='profile-div'>
        <div>
            <img className='profile-pic'
            src ="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
            />
        </div>
        <div style={{
          width:'90%',
          textAlign:'center'
        }}>
            <h4>{userdata.name}</h4>
            <h5>{userdata.email}</h5>
        </div>
    </div>


    <div className='topic-div'>
    <div className='topic-head'>
        <div className='topic-heading'>
        <h4>Topic Followed</h4>
        </div>
        <div style ={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }}>
        {list.map((ele,i) =>{
        return (
            <div style ={{}}>
             <img style ={{width:"150px",height:"150px",borderRadius:"75px"}}
             src="https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
             <h6 style={{
            textAlign:"center",
            fontFamily:"Montserrat Subrayada , sans-serif"
            }}> <Link to = {{ pathname: '/topic' ,state: {_id:listId[i]}}}>{ele}</Link></h6>
        </div>
        )
    })}
    </div>
    </div>
    </div>

    <div style ={{
    margin:"20px auto",
    boxSizing:"border-box",
    border:"5px solid black",
    borderRadius:"16px",
    width:"80%",
    height:"400px"}}>
       <div style={{
            textAlign:"center",
            fontFamily:"'Montserrat Subrayada', sans-serif;",
            textDecoration:"underline"
        }}>
        <h4>Game History</h4>
        </div>
        <Anstally></Anstally>
    </div>
    </div>
   )

 }



export default Dashboard
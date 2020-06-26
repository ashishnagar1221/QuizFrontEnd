import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import NavBar from "../navbar";



const Alltopics = () => {
    const [topicList,setTopicList] = useState([])
    useEffect(() => {
        fetch(https://quizaap.herokuapp.com/alltopic',{
          headers:{
            "Content-Type":"application/json",
            'Authorization':"Bearer "+ localStorage.getItem('jwt')
          }
        })
        .then(res => res.json())
        .then(result =>{
            setTopicList(result)
        })
      },[])
   
      //console.log(topicList)
    
      if(!topicList.length){
        return(<div>
         <img style={{
             position: 'relative',
             height:'100vh',
             width: '100%'
         }} src ="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt=""/>
        </div>)
        }

  return(
    <div><NavBar/>
        <div style ={{
            margin:"30px auto",
            textAlign:"center",
            width:'80%'
            }}>
            {topicList.map(item =>{
                return(
                    
                    <div><h5>{item.category}</h5>
                    <div style ={{
                                    display:'flex',
                                    flexDirection: 'row',
                                    borderBottom:'1.5px solid black' 
                                }}>
                        {
                            item.item.map(subitem =>{
                                return(<div style={{
                                    margin:'10px'
                                }}>
                                    <div>
                                       <img src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-128.png'/>
                                    </div>
                                    <div>                                  
                                    <Link to = {{ pathname: '/topic' ,state: {_id:subitem._id}}}>
                                    <h6>{subitem.name}</h6>
                                    </Link>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                )
            })}
            
        </div>
    </div>
   )

 }

export default Alltopics
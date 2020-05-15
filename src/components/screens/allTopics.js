import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import TheTopic from "./TheTopic";


const Alltopics = () => {
    const [topicList,setTopicList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3600/alltopic',{
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
   
      console.log(topicList)
    
      if(!topicList.length){
        return(<div>
         <img src ="https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt=""/>
        </div>)
        }

  return(
    <div>Alltopics
        <div>
            {topicList.map(item =>{
                return(
                    
                    <div><h5>{item.category}</h5>
                    <div>
                        {
                            item.item.map(subitem =>{
                                return(
                                       <Link to ="#" onClick ={() => console.log(subitem)}> 
                                       <h6>{subitem.name}</h6> 
                                      </Link>
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
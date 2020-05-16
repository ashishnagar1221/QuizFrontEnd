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
          <button className ='btn waves-effect waves-light #c62828 blue darken-3'>Start game</button>
          <button className ='btn waves-effect waves-light #c62828 green darken-3'>Follow</button>
          </div>
          
       
      </div>
      <div>
        <h4>Topic Name</h4>
      </div>
      <div>
        <h4>Description</h4>
        <p>gfdgnm,nvsmngm, ,mng,ds,nmfsd,mv nmcvbnvflkgvkflkjgfsklgjfklsnglskfnbvljknfvbnslfnvfslnvbfknblkfnlbknfdlkbnlfdknblkefesdak j;dglj;lj ;lj;lgfk;lkejr hiuhroughkfl teoih uheiufh snvkl urehgerkj nbiubrgkjrb jkbnkebgkjbkj befkjbgfjlkdlk lbhlkbsdlb bujbrkgfbug brgburbub khbrgkjrbkbgv  brgkhnfui ujbnfjhrbgvj brgjbrubu jbvkjbkjbn ujbvgkbfbvru brkbg ubgkjrgbk wqprwwruwopehgvdsakn lhgflksjgdlk pojgrewijf iaif ioeoiwytwjrpi  iifbkj iohjfvdij oij jtgjfepidjfpfp ohlkksd hnweklgk lilkgslhhfilejfeioh oi jglujsdjflk hrsglj ih</p>
      </div>
    </div>
   )

 }

export default TheTopic
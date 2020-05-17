import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3600/userprofile',{
      headers:{
        'Authorization':"Bearer "+ localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(result =>{
        //console.log(result)
        setUserdata(result)
    })
  },[])
 
  console.log(userdata.tnaame)
  
  return(
    <div>
        <div style={{
        display:"flex",
        width:"80%",
        backgroundColor:"#230023",
        justifyContent:"space-around",
        boxSizing:"content-box",
        margin:"20px auto"
    }}>
        <div>
            <img style ={{width:"250px",height:"250px",borderRadius:"4px"}}
            src ="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
        </div>
        <div>
            <h4> {userdata.name}</h4>
        </div>
    </div>


    <div  style ={{
    margin:"20px auto",
    boxSizing:"border-box",
    border:"5px solid black",
    borderRadius:"16px",
    width:"80%",
    height:"400px"
}}>
    <div style ={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        flexWrap:"wrap"
    }}>
        <div style={{
            textAlign:"center",
            fontFamily:"'Montserrat Subrayada', sans-serif;",
            textDecoration:"underline"
        }}>
        <h4>Topic Followed</h4>
        </div>
        <div style ={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }}>
        <div>
             <img style ={{width:"150px",height:"150px",borderRadius:"75px"}}
             src="https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
             <h6 style={{
            textAlign:"center",
            fontFamily:"Montserrat Subrayada , sans-serif"
            }}>Topic name</h6>
            
        </div>
    </div>
    </div>
    </div>
    </div>
   )

 }



export default Dashboard
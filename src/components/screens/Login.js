import React, {useState,useContext}from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const Login = () => {

    const {state,dispatch} = useContext(UserContext)
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const PostData = ()=>{
        fetch("https://quizaap.herokuapp.com/signin",{
            method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            }).then(res=>res.json())
                .then(data=>{
                  console.log(data)
                  if(data.error){
                      M.toast({html:data.error})
                      console.log(data)
                    }else{
                        localStorage.setItem("jwt",data.token)
                        localStorage.setItem("user",JSON.stringify(data.user))
                        dispatch({type:"USER",payload:"data.user"})
                        M.toast({html:`SignedIn Success`})  
                        history.push('/')
                    }
                })
        }

  return(
    <div className="mycard">
    <div className="card auth-card"> 
    <h2>Login</h2>
    <input type="text"
            placeholder ="email"
            value ={email}
            onChange = {(e)=>setEmail(e.target.value)}
            />
        <input type="password"
            placeholder = "password"
            value ={password}
            onChange = {(e)=>setPassword(e.target.value)}
            />  
        <button className="btn waves-effect wave-light"
        onClick = {()=>PostData()}>
            Login
        </button>
        <h5>
            <Link to="/signup">Don't have account </Link> 
        </h5>
      </div>
    </div>
   )

 }

export default Login;
import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
/**
* @author
* @function Signup
**/

const Signup = () => {
    const history = useHistory();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const PostData = ()=>{
        fetch("/signup",{
            method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                })
            }).then(res=>res.json())
                .then(data=>{
                  if(data.error){
                      M.toast({html:data.error})
                      console.log(data)
                    }else{
                        M.toast({html:data.message})  
                        history.push('/login')
                    }
                })
        }


  return (
    <div className="mycard">
    <div className="card auth-card"> 
        <h2>SignUp</h2>
        <input type="text"
            placeholder ="name"
            value ={name}
            onChange = {(e)=>setName(e.target.value)}
            />
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
       onClick={()=>PostData()}
        >
        SignUp
    </button> 
    <h5> 
        <Link to="/login">Already have an account</Link>
    </h5>
  </div>
</div>
   )

}

export default Signup
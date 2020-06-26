import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = () =>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderList = () =>{
    if(state){
      return[
        <li><Link style={{color:'#1b6ca8'}} to="/Alltopics">Alltopics</Link></li>,
        <li><Link style={{color:'#1b6ca8'}} to='/dashboard'>dashboard</Link></li>,
        <li>
        <button className ='btn waves-effect waves-light #c62828 red darken-3'
          onClick={() =>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/')
          }}> LogOut
        </button>
      </li>
      ]
    }else{
      return[
        <li><Link style={{color:'#1b6ca8'}} to="/login">Login</Link></li>,
        <li><Link style={{color:'#1b6ca8'}} to="/Signup">SignUp</Link></li>
      ]
    }
  }
  return (
        <nav className="Nav-trans">
        <div className="nav-wrapper">
          <Link to={state?"/dashboard":"/"} className="brand-logo left" style={{marginLeft:'20px',color:'#1b6ca8', fontFamily:"'Piedra', cursive"}}>
            {/* <img style={{height:'60px'}}
            src="https://www.pngitem.com/pimgs/m/291-2919867_transparent-q-and-a-png-letter-q-transparent.png"/> */}
            Quizzera
          </Link>
          <ul id="nav-mobile" className="right" style={{ marginRight:'20px'}}>
            {renderList()}
          </ul>
        </div>
      </nav>
       
    )
}

export default NavBar;
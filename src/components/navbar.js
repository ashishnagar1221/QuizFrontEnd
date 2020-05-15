import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = () =>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderList = () =>{
    if(state) {
      return[
        <li><Link to="/Alltopics">Alltopics</Link></li>,
        <li><Link to='/dashboard'>dashboard</Link></li>,
        <li><Link to="/Quiz">Quiz</Link></li>,
        <li>
        <button className ='btn waves-effect waves-light #c62828 red darken-3'
          onClick={() =>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/login')
          }}> LogOut
        </button>
      </li>
      ]
    }else{
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/Signup">SignUp</Link></li>
      ]
    }
  }
  return (
        <nav>
        <div className="nav-wrapper">
          <Link to={state?"/":"/login"} className="brand-logo left">Quiz App</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
       
    )
}

export default NavBar;
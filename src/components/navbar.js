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
        <nav className="Nav-trans">
        <div className="nav-wrapper">
          <Link to={state?"/dashboard":"/"} className="brand-logo left">
            {/* <img style={{height:'60px'}}
            src="https://www.pngitem.com/pimgs/m/291-2919867_transparent-q-and-a-png-letter-q-transparent.png"/> */}
            Quiz App
          </Link>
          <ul id="nav-mobile" className="right black">
            {renderList()}
          </ul>
        </div>
      </nav>
       
    )
}

export default NavBar;
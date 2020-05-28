import React from 'react'
import NavBar from '../navbar'
import { Link } from 'react-router-dom'

const Landing = (props) => {
  return(
    <section className='landing'>
        <NavBar/>
        <div>
          <h1 style={{
              textAlign:"center",
              color:"#1b6ca8"
          }}>
            Quizzera</h1>
            <div>
              <h5>Connecting through the topic of your interests</h5>
            </div>
            <div>
              <p>
                <ul>
                  <li>fdfjdsbvkjbd kjbdkjbvkj  bkjbdvkjb dvbvkj </li>
                  <li>fdfjdsbvkjbd kjbdkjbvkj  bkjbdvkjb dvbvkj </li>
                  <li>fdfjdsbvkjbd kjbdkjbvkj  bkjbdvkjb dvbvkj </li>
                  <li>fdfjdsbvkjbd kjbdkjbvkj  bkjbdvkjb dvbvkj </li>
                  <li>fdfjdsbvkjbd kjbdkjbvkj  bkjbdvkjb dvbvkj </li>
                </ul>
              </p>
            </div>
            <div>
              <button><Link to="/login">Login</Link></button>
              <button><Link to="/Signup">SignUp</Link></button>
            </div>
        </div>
    </section>
   )

 }

export default Landing
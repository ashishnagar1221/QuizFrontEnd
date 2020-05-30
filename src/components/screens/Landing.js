import React from 'react'
import NavBar from '../navbar'
import { Link } from 'react-router-dom'

const Landing = (props) => {
  return(
    <section className='landing'>
        <NavBar/>
        <div style ={{
          textAlign:"center",
          backgroundColor: '#00000040',
          margin:'80px 40% 0px 30px',
          paddingBottom:'40px'
        }}>
          <h1 style={{
              color:"#1b6ca8",
              fontFamily:"'Piedra', cursive"
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
              <button className ='waves-effect waves-light btn-large '><Link className='link' to="/login">Login</Link></button>
              <button className ='waves-effect waves-light btn-large '><Link className='link' to="/Signup">SignUp</Link></button>
            </div>
        </div>
    </section>
   )

 }

export default Landing
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
                  <li>This quiz gives you an endless stream of Technical knowledge questions. </li>
                  <li>The questions are hand-selected and are designed to test a wide range of your general knowledge. </li>
                  <li>You can track your progress with score secure in each game at dashboard.</li>
                  <li>At the end of the quiz, the score is shown, and table of correct and incorrect answers are displayed, for one to understand where the mistake was made.</li>
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
import React,{useEffect,createContext, useReducer, useContext} from 'react';
import {BrowserRouter,Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar'
import Login from './components/screens/Login'
import SignUp from './components/screens/Signup'
import Quiz from './components/screens/Quiz'
import Dashboard from './components/screens/profile'
import Alltopics from './components/screens/allTopics';
import {reducer, initialState} from './components/reducers/userReducer'
import TheTopic from './components/screens/TheTopic';

export const UserContext = createContext()

const Routing  = ()=> {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect (() =>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      history.push('/login')
    }
  },[])
  return (
    <Switch>
      <Route  exact path='/'>
      <Alltopics/>
      </Route>
      <Route path='/login'>
      <Login/>
    </Route>
      <Route path='/Alltopics'>
      <Alltopics/>
      </Route>
    <Route path='/dashboard'>
      <Dashboard/>
      </Route>
    <Route path='/topic'>
      <TheTopic/>
    </Route>
    <Route path='/Signup'>
      <SignUp/>
    </Route>
    <Route path='/Quiz'>
      <Quiz/>
    </Route>
    </Switch>
    
  )
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
 return (
   <UserContext.Provider value = {{state,dispatch}}>
     <BrowserRouter>
     <NavBar/>
     <Routing/>
  </BrowserRouter>
   </UserContext.Provider>
 )
}

export default App;

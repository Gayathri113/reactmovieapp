import React,{useContext} from 'react';


import './Auth.css';
import Card from './UI/Card/Card'
import {AuthContext} from './context/auth-context'

const Auth = props => {
  const authContext=useContext(AuthContext)

  const loginHandler = () => {
    authContext.login()
  };

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
        <h5 style={{color:'#b2beb5',textAlign:'center'}}>Designed & Developed by GayathriRaja</h5>
            <a href="https://github.com/Gayathri113/reactmovie"><h5 style={{textAlign:'center'}}>View code</h5></a>
      </Card>
    </div>
  );
};

export default Auth;

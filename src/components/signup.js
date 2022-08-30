import React, { useContext, useState ,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
    // import "./todo/login.scss"
    // import { Navbar, Alignment, Button } from '@blueprintjs/core';
    import { LoginContext } from "./context/loginContext";
    import Header from './header/header.js'
    import { When } from "react-if";
    
    export default function SignupForm(props) {
        let navigate = useNavigate();
      const loginContext = useContext(LoginContext);
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState();
      const [role, setRole] = useState('user');
      /////////submit/////////////////
      const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password) {
        loginContext.signUp(username, password,role)
        setTimeout(() => console.log('Initial timeout!'), 1000);
        navigate("/")
    }
    else {
        alert("Please enter your username and password");
    }

      };
      const usernameHandler = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
      };
      const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
      };
      const roleHandler = (e) => {
        e.preventDefault();
        setRole(e.target.value);
      };
      return (
        <>
        <Header/>
          <When condition={!loginContext.login}>
          <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='tittle'> Sing up form  </h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full name</label>
                    <input className='input' type='text' onChange={usernameHandler}  />
                </div>
                <div className='email'>
                    <label className='label'>Rolel</label>
                    <input className='input' type='test' onChange={roleHandler} />
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type='password' onChange={passwordHandler}  />
                </div>
                <div >
                    <button className='submit' onClick={handleSubmit}>Sign up </button>
                </div>
            </form>
        </div>

    </div>
          </When>
          
        
        </>
      );
    }
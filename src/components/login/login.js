
    import React, { useContext, useState } from "react";
    import "./login.css"
    import { Button } from '@blueprintjs/core';
    import { LoginContext } from "../context/loginContext";
    import { When } from "react-if";
    
    export default function LoginForm(props) {
      const loginContext = useContext(LoginContext);
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState();
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password) {
        loginContext.loginFunction(username, password)
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
      return (
        <>
          <When condition={!loginContext.login}>
          <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='tittle'> Login form </h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full name</label>
                    <input className='input' type='text' onChange={usernameHandler}  />
                </div>
    
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type='password' onChange={passwordHandler}  />
                </div>
                <div >
                    <button className='submit' onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>

    </div>
          </When>
          <When condition={loginContext.login}>
            <div>
                        <h2>{`User name :${loginContext.user.username}`}</h2>
                    <Button onClick={loginContext.logoutFunction}>Logout</Button>
                    </div>
                </When>
        
        </>
      );
    }
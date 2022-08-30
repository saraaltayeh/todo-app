import React from 'react';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import './app.css'
import Header from './components/header/header';
import ToDo from './components/todo/todo.js';
import Settings from './components/context/settings';
import SignupForm from './components/signup'
import LoginForm from './components/login';
import LoginProvider from "./components/context/loginContext";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
       <LoginProvider>
      <Settings>
      <Header/>
        <Routes>
      <Route path="/" element={ [<LoginForm></LoginForm>, <ToDo />]}/>
      <Route path="/signUp" element={<SignupForm/>}/>
      </Routes>
      </Settings>
      </LoginProvider>
      
      </Router>
      </div>
    );
  }
}
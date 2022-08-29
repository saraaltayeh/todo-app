import React from 'react';
import ToDo from './components/todo/todo';
import SettingsContext from './components/context/settings';
import Header from './components/header/header';
import '@blueprintjs/core/lib/css/blueprint.css';
import './app.css'

import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/context/form';
import Footer from './components/footer/footer';
import Auth from './components/auth';
import LoginTest from './components/logintest'
// import About from './pages/about'
// import Files from './pages/Files'
// import Error from './pages/Error'

export default class App extends React.Component {
  render() {
    return (
      <>
       <Router>
      <Header/>
      <SettingsContext>
      <ToDo />
      <Routes>
          <Route path="/" element={ [<LoginTest/>]}/>
      
      {/* <Route path="/about" element={<About/>}/>
      <Route path="/file" element={<Files/>}/>
      <Route path="*" element={<Error/>}/> */}
      
      </Routes>
      <Form />
    </SettingsContext>
    <Footer />
    </Router>
    </>
    );
  }
}

import React from 'react';
import ToDo from './components/todo/todo';
import SettingsContext from './components/context/settings';
import Header from './components/header/header';
import '@blueprintjs/core/lib/css/blueprint.css';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/context/form';
import Footer from './components/footer/footer';
export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <SettingsContext>
      <ToDo />
      <Form />
    </SettingsContext>
    <Footer />
    </>
    );
  }
}

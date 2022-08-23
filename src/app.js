import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './components/context/settings';

import '@blueprintjs/core/lib/css/blueprint.css';
import './app.css'
import Header from './components/header/header';

export default class App extends React.Component {
  render() {
    return (
      <Settings>
        <Header />
      <ToDo />
    </Settings>
    );
  }
}

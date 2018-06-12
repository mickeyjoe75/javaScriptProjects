import React, { Component } from 'react';
import logo from './russia-2018.png';
import './App.css';
import FootballContainer from './containers/FootballContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fifa Russia 2018</h1>
        </header>

      <FootballContainer />
      </div>
    );
  }
}

export default App;

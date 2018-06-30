import React, { Component } from 'react';
import './App.css';
import PiggyBank from './PiggyBank';

class App extends Component {
  render() {
    return (
      <PiggyBank
        title = "Piggyyyyyyyyyy Bank" 
        owner = "Joe"
        depositAmount = {2}
      />
    );
  }
}

export default App;

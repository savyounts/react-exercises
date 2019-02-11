import React, { Component } from 'react';
import './App.css';
import SocialCard from './socialCard'
import Calculator from './calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialCard header="Learning React? Start Small" author="Sav" text="more textttetey more."/>
        <Calculator />
    </div>
    );
  }
}

export default App;

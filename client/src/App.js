import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages'

class App extends Component {
  constructor (props) {
    super (props);
  }

  render() {
    this.messageWindows = [];
    for (let count = 0; count < 40; count++) {
      this.messageWindows.push(
          <Messages key = {count}/>
      )
    }    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Stress Test</h1>
        </header>
        {this.messageWindows}
      </div>
    );
  }
}

export default App;

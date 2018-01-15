import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import Api from './api';
import Messages from './messages';

class App extends Component {
  constructor () {
    super ();
    this.setInterval = this.setInterval.bind(this);
    this.setCount = this.setCount.bind(this);
    this.start = this.start.bind(this);
    this.state = {
      count: 10,
      interval: 1000
    }
  }
  start () {
      Api.start(this.state.count, this.state.interval);
  }

  setCount (e) {
    this.state.count = e.target.value;
    this.setState(this.state)
    Api.set({count: this.state.count})
  }

  setInterval (e) {
    this.state.interval = e.target.value;
    this.setState(this.state);
    Api.set({interval: this.state.interval})
  }

  render() {
    this.messageWindows = [];
    for (let count = 0; count < 10; count++) {
      this.messageWindows.push(
        <Messages key={count} />
      )
    }

    var appTemplate =
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Stress Test</h1>
          <div>
              <input placeholder = 'interval (ms)' onBlur = {this.setInterval}></input>
              <input placeholder = 'message count' onBlur = {this.setCount}></input>
              <button onClick = {this.start}>Start</button>
            </div>
        </header>
        {this.messageWindows}
      </div>

    return appTemplate;
  }
}

export default App;

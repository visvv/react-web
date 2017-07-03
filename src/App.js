import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Login email="mail@gmail.com"/>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;

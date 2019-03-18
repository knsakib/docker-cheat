import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I am a Pull request from <br />
            Lesson-95-Pull-Request-From-This-Branch <br />
            To Lesson-91-AWS-Beanstalk-Automatic-Deployment
          </p>
        </header>
      </div>
    );
  }
}

export default App;

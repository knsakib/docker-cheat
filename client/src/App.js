import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Fib from './Fib';
import OtherPage from './OtherPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <nav className="nav-wrapper red lighten-2">
          <div className="container">
            <Link className="brand-logo" to="/">Demo App(ReactClient)</Link>
              <ul className="right">
          
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/otherpage">Other Page</NavLink></li>

              </ul>
          </div>
        </nav> 

        <div className="container">
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />

        </div>
      </div>
      </Router>

    );
  }
}

export default App;

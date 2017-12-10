import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import Auth from './Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/auth" component={Auth} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

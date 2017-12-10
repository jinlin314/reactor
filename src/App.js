import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            {/*<Route path="/" />*/}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MenuMain from './components/Menu';
import NotFound from './containers/NotFound';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Switch>
              <Route component={MenuMain} />
              <Route path="/not-found" component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


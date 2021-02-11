import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthRoute from './components/autoroute';
import HomeComponent from './containers/home/home';
import HeaderComponent from './containers/header/header';
import MeComponent from './containers/me/me';

import './App.css';

const store = configureStore();

class App extends Component {

  render() {
    return (
    <Provider store={store}>
        <Router>

      <div className="App">
      <HeaderComponent/>
        <div className="container">
          <Switch>
            <AuthRoute path="/login" type="guest">
              <div>Login Page</div>
            </AuthRoute>
            <AuthRoute path="/me" type="private">
              <MeComponent></MeComponent>
            </AuthRoute>
            <Route path="/" component={HomeComponent} />
          </Switch>
        </div>
        <div>Footer</div>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
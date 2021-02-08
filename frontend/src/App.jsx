import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

import VoteComponent from './containers/vote';
import HeaderComponent from './containers/header';

const store = configureStore();

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent/>
        <VoteComponent />
      </div>
    </Provider>
    );
  }
}

export default App;
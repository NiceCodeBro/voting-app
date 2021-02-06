import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

import VoteComponent from './containers/vote';

const store = configureStore();

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Voting App</h1>
        </header>
        <VoteComponent />
      </div>
    </Provider>
    );
  }

  mapStateToProps = state => {
    return {
      counter: state.counterReducer
    }
  }

  mapDispatchToProps = dispatch => {
    return {
      increase: () => {
        dispatch({type: "INCREASE"})
      }
    }
  }


}




export default App;

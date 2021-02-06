import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

import VoteComponent from './containers/vote';
import HeaderComponent from './components/header';

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

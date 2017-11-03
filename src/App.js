import React, { Component } from 'react'
import { compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { persistState } from 'redux-devtools'

import logo from './logo.svg'
import './App.css'

import checkBoxColumnReducer from './reducers/CheckBoxColumn'
import CheckBoxColumn from './components/CheckBoxColumn';

import DevTools from './utils/devTools';

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

const store = finalCreateStore(checkBoxColumnReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Provider store={store}>
          <CheckBoxColumn />
        </Provider>
        {/*<DevTools store={store} shortcut='ctrl+d'/>*/}
      </div>
    );
  }
}

export default App;
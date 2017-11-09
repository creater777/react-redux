import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import logo from './logo.svg'
import { logger } from './middlewares/loger'
import './App.css'

import checkBoxColumnReducer from './reducers/CheckBoxColumn'
import CheckBoxColumns from './containers/CheckBoxColumns'


const store = createStore(
  checkBoxColumnReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, thunkMiddleware)
)

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
            <CheckBoxColumns />
        </Provider>
      </div>
    );
  }
}

export default App;
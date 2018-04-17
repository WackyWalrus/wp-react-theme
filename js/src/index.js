import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter, withRouter } from 'react-router-dom'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index.js'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

import App from './components/App.jsx'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

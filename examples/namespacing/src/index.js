import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'typed-redux'
import InputContainer from './components/Input/Container'
import CheckboxContainer from './components/Checkbox/Container'
import GreetContainer from './components/Greet/Container'
import * as reducers from './reducers'

const store = createStore(combineReducers(reducers));

const App = () => (
  <div>
    <InputContainer stateKey="name" />
    <CheckboxContainer stateKey="remember" />
    <GreetContainer stateKey="name" />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'typed-redux'
import Counter from './components/Counter'
import counter from './reducers/index'
import { Increment, Decrement } from './actions/index'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch(new Increment())}
    onDecrement={() => store.dispatch(new Decrement())}
  />,
  rootEl
)

render()
store.subscribe(render)

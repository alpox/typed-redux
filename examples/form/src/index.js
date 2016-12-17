import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'typed-redux'
import Form from './components/Form'
import form from './reducers'
import { ChangeName, ChangeRemember } from './actions'

const store = createStore(form)
const rootEl = document.getElementById('root')

const actions = bindActionCreators({
  changeName: name => new ChangeName(name),
  changeRemember: remember => new ChangeRemember(remember)
}, store.dispatch);

const render = () => {
  const { name, remember } = store.getState()
  ReactDOM.render(
    <Form
      name={name}
      remember={remember}
      onChangeName={actions.changeName}
      onChangeRember={actions.changeRemember}
    />,
    rootEl
  )
}

render()
store.subscribe(render)

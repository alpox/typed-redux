import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action, createStore, bindActionCreators } from 'typed-redux';
import Form from './components/Form';
import form from './reducers/index';
import { ChangeName, ChangeRemember } from './actions/index';

const store = createStore(form);
const rootEl = document.getElementById('root');


const actions = bindActionCreators({
  changeName: name => new ChangeName(name),
  changeRemember: remember => new ChangeRemember(remember)
}, store.dispatch);

function render() {
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

render();
store.subscribe(render);

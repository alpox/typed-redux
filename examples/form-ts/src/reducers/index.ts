import { Reducer, Action } from 'typed-redux';
import { ChangeName, ChangeRemember } from '../actions';

type State = {
  name: string,
  remember: boolean
};

const initState = {
  name: '',
  remember: true
};

const formReducer: Reducer<State> = (state = initState, action: Action) => {
  if (action instanceof ChangeName) {
    return {...state, name: action.name};
  }

  if (action instanceof ChangeRemember) {
    return {...state, remember: action.remember};
  }

  return state;
}

export default  formReducer;

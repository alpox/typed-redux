import { ChangeName, ChangeRemember } from '../actions';

const initState = {
  name: '',
  remember: true
};

export default (state = initState, action: Object) => {
  if (action instanceof ChangeName) {
    return {...state, name: action.name};
  }

  if (action instanceof ChangeRemember) {
    return {...state, remember: action.remember};
  }

  return state;
}

import { Reducer, Action } from 'typed-redux';
import { Increment, Decrement } from '../actions/index'

const counterReducer: Reducer<number> = (state = 0, action: Action) => {
  if (action instanceof Increment) {
    return state + 1
  }

  if (action instanceof Decrement) {
    return state - 1
  }

  return state
}

export default counterReducer;

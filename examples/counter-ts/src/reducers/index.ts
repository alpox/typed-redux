import { Increment, Decrement } from '../actions/index'

export default (state = 0, action: Object) => {
  if (action instanceof Increment) {
    return state + 1
  }

  if (action instanceof Decrement) {
    return state - 1
  }

  return state
}

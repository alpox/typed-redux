import { Change } from './actions'

const initState = false

export default (state = initState, action) => {
  switch (action.constructor) {
    case Change:
      return action.checked
    default:
      return state
  }
}

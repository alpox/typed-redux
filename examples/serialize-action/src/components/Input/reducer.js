import { Change } from './actions'

const initState = ''

export default (state = initState, action) => {
  switch (action.constructor) {
    case Change:
      return action.value
    default:
      return state
  }
}

import { ChangeName, ChangeRemember } from '../actions'

const initState = {
  name: '',
  remember: true
}

export default (state = initState, action) => {
  switch (action.constructor) {
    case ChangeName:
      return {...state, name: action.name}
    case ChangeRemember:
      return {...state, remember: action.remember}
    default:
      return state
  }
}

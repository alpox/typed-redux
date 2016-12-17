import { combineReducers, createStore } from 'typed-redux'
import * as reducers from './reducers'
import namespacedActions from './namespacedActions'
import { serialize, deserialize } from './actionUtils'
import * as CheckboxActions from './components/Checkbox/actions'
import * as InputActions from './components/Input/actions'

const inputChange = new InputActions.Change('test')
console.log(inputChange) // Change {value: "test"}

const serializedInputChange = serialize(namespacedActions, inputChange)
console.log(serializedInputChange) // {"value":"test","$$type":"Input.Change"}
console.log(typeof serializedInputChange === 'string') // true

const dserializedInputChange = deserialize(namespacedActions, serializedInputChange)
console.log(dserializedInputChange) // Change {value: "test"}
console.log(dserializedInputChange instanceof InputActions.Change) // true


const checkboxChange = new CheckboxActions.Change(true)
console.log(checkboxChange) // Object { checked: true }

const serializedCheckboxChange = serialize(namespacedActions, checkboxChange)
console.log(serializedCheckboxChange) // {"checked":true,"$$type":"Checkbox.Change"}
console.log(typeof serializedCheckboxChange === 'string') // true

const dserializedCheckboxChange = deserialize(namespacedActions, serializedCheckboxChange)
console.log(dserializedCheckboxChange) // Object { checked: true }
console.log(dserializedCheckboxChange instanceof CheckboxActions.Change) // true


const store = createStore(combineReducers(reducers))
console.log(store.getState()) // Object {name: "", remember: false}

store.dispatch(dserializedInputChange)
console.log(store.getState()) // Object {name: "test", remember: false}

store.dispatch(dserializedCheckboxChange)
console.log(store.getState()) // Object { name: "test", remember: true }

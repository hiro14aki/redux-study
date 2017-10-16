import { createStore } from 'redux'

// Reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Store
const store = createStore(counter)

console.log(store.getState())
store.dispatch({type: 'INCREMENT'})
console.log(store.getState())

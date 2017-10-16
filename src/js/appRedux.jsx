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

// Render
const render = () => {
  document.body.innerText = store.getState()
}
store.subscribe(render)

render()


// // Subscribe
// store.subscribe(() => {
//   document.body.innerText = store.getState()
// })

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})

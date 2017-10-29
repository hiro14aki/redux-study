import { createStore } from 'redux'

/**
 * Redux チュートリアルサンプル
 * Reduxチュートリアル動画を見ながらReduxを基礎の基礎から
 */

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

// 初期表示用
render()

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})

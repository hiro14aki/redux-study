import React from 'react'
import ReactDOM from 'react-dom'
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

// React : Counter コンポーネントを作成
const Counter = ({value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <div>{value}</div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

// Store
const store = createStore(counter)

// React : ReactDOM でレンダリング
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })}
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)

// 初期表示用
render()

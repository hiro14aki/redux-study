import { createStore } from 'redux'

/* Actionの実装 */

// Action名の定義
const SEND = 'SEND';

// Action Creator
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

// Reducer
function formReducer(state, action) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* Storeの実装 */

// 初期state変数（initialState）の作成
const initialState = {
  value: null,
};
// createStore（）メソッドを使ってStoreの作成
const store = createStore(formReducer, initialState);

// ActionをReducerに伝播
store.dispatch(actionCreators());

// stateの状態を購読。状態に変化があったらリスナーを実行
store.subscribe(() => {
  /* リスナーの処理を書く */
  // stateを取得
  store.getState();
});

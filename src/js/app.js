import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


/**
 *  Redux チュートリアルサンプル
 */

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


/**
 *  Redux と React の連携
 */
// Container Components の実装
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data-{this.props.value} />
      </div>
    );
  }
}
FormApp.prototype = {
  onClick: React.PropTypes.func.isRequired,
  value: React.propTypes.string,
}

// Presentational Components の実装 (FormInput)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}Send</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

// Presentational Components の実装 (FormDisplay)
class FormDisplay extends React.component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}
FormDisplay.propTypes = {
  data: React.PropTypes.string,
}

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);

// Connect to redux
function mapStateToProps(state){
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch){
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

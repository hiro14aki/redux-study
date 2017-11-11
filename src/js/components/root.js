import React, { Component, PropTypes } from 'react';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Props のバリデーション
Root.propTypes = {
  // 文字列（必須）
  title: PropTypes.string.isRequired,
  // 呼び出し元の開始タグと終了タグの間にある要素が入る特別な Props
  children: PropTypes.any.isRequired,
};

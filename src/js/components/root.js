import React, { Component } from 'react';
import Box from './box';
import PostalCodeAjax from './postalCodeAjax';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: true,
    };
  }

  handleClick() {
    this.setState({
      showBox: !this.state.showBox
    });
  };

  render() {
    const btnName = this.state.showBox ? 'Box非表示' : 'Box表示';
    const boxTitle = this.state.boxTitle;
    const boxComponent = this.state.showBox ? (
      <Box boxTitleP={boxTitle}>Sample Box</Box>
    ) : null;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        boxTitle: <input type="text" onChange={elm => this.setState({boxTitle: elm.target.value})} />
        {boxComponent}
        <button className="btn btn-primary" onClick={() => this.handleClick()}>{btnName}</button>
        <div>
          {this.props.children}
        </div>
        <PostalCodeAjax></PostalCodeAjax>
      </div>
    );
  }
}

// Props のバリデーション
// Root.propTypes = {
//   // 文字列（必須）
//   title: PropTypes.string.isRequired,
//   // 呼び出し元の開始タグと終了タグの間にある要素が入る特別な Props
//   children: PropTypes.any.isRequired,
// };

import React, { Component } from 'react';
import Axios from 'axios';

import Box from './box';

export default class PostalCodeAjax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postalCode: '106-6113',
      data: {}
    };
  }

  // props を受け取って state にセットする必要あり
  componentWillReceiveProps(nextProps) {
    if (this.props.boxTitle != nextProps.boxTitle) {
      if (nextProps.boxTitle == '') {
        this.setState({boxTitle: Number.parseInt(Date.now(), 10)});
      } else if (nextProps.boxTitle != this.state.boxTitle) {
        this.setState({boxTitle: nextProps.boxTitle});
      }
    }
  }

  componentDidMount() {
    this.requestAjax();
  }

  requestAjax() {
    Axios.get(`http://api.zipaddress.net/?zipcode=${this.state.postalCode}`).then(
      response => this.setState({data: response.data})
    );
  }

  render() {
    const data = this.state.data;
    const boxTitle = this.state.boxTitle;
    const addressData = data.data != undefined ? data.data : {};
    return (
      <Box boxTitleP={boxTitle}>
        <input
          type="text"
          value={this.state.postalCode}
          onChange={elm => this.setState({postalCode: elm.target.value})} />
        <button className="btn btn-primary" onClick={() => this.requestAjax()}>検索</button>
        <div>{addressData.pref}</div>
        <div>{addressData.address}</div>
        <div>{addressData.city}</div>
        <div>{addressData.town}</div>
      </Box>
    );
  }
}

import React, { Component } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxTitle: '',
    };
  }

  componentWillMount() {
    this.setState({
      boxTitle: Number.parseInt(Date.now(), 10)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.boxTitleP != nextProps.boxTitleP) {
      if (nextProps.boxTitleP == '') {
        this.setState({boxTitle: Number.parseInt(Date.now(), 10)});
      } else if (nextProps.boxTitleP != this.state.boxTitle) {
        this.setState({boxTitle: nextProps.boxTitleP});
      }
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.state.boxTitle}</div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

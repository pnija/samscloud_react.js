import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default class SacTextArea extends Component {
  render() {
    return <TextArea {...this.props}>{this.props.children}</TextArea>;
  }
}

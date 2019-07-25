import React, { Component } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export default class SacText extends Component {
  render() {
    return <Text {...this.props}>{this.props.children}</Text>;
  }
}

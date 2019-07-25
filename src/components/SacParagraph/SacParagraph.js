import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export default class SacParagraph extends Component {
  render() {
    const { children, ...props } = this.props;
    return <Paragraph {...props}>{children}</Paragraph>;
  }
}

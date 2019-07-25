import React from 'react';
import { Col } from 'antd';

export default class SacCol extends Col {
  render() {
    const { children, ...props } = this.props;
    return <Col {...props}>{children}</Col>;
  }
}

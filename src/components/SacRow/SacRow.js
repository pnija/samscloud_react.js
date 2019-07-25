import React from 'react';
import { Row } from 'antd';

export default class SacRow extends Row {
  render() {
    const { children, ...props } = this.props;
    return <Row {...props}>{children}</Row>;
  }
}

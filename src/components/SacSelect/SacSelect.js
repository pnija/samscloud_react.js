import React from 'react';
import { Select } from 'antd';

export default class SacSelect extends Select {
  render() {
    const { children, ...props } = this.props;
    return <Select {...props}>{children}</Select>;
  }
}

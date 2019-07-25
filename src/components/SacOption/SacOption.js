import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class SacOption extends Select {
  render() {
    const { children, ...props } = this.props;
    return <Option {...props}>{children}</Option>;
  }
}

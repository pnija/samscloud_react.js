import React from 'react';
import { Radio } from 'antd';

export default class SacRadio extends Radio {
  render() {
    const { children, ...props } = this.props;
    return <Radio {...props}>{children}</Radio>;
  }
}

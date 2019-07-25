import React from 'react';

import { Checkbox } from 'antd';

export default class SacCheckbox extends Checkbox {
  render() {
    const { children, ...props } = this.props;
    return <Checkbox {...props}>{children}</Checkbox>;
  }
}

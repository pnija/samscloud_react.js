import React from 'react';

import { Checkbox } from 'antd';

const { Group } = Checkbox;

export default class SacCheckboxGroup extends Checkbox.Group {
  render() {
    const { children, ...props } = this.props;
    return <Group {...props}>{children}</Group>;
  }
}

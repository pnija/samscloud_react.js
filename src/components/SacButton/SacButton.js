import React from 'react';
import { Button } from 'antd';

export default class SacButton extends Button {
  render() {
    const { children, ...props } = this.props;
    return <Button {...props}>{children}</Button>;
  }
}

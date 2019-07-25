import React from 'react';
import { Card } from 'antd';

export default class SacCard extends Card {
  render() {
    const { children, ...props } = this.props;
    return <Card {...props}>{children}</Card>;
  }
}

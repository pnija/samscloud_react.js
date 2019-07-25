import React from 'react';
import { Steps } from 'antd';

export default class SacSteps extends Steps {
  render() {
    const { children, ...props } = this.props;
    return <Steps {...props}>{children}</Steps>;
  }
}

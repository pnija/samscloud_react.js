import React from 'react';
import { Input } from 'antd';

export default class SacInput extends Input {
  render() {
    return <Input {...this.props} />;
  }
}

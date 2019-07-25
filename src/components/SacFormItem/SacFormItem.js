import React from 'react';
import { Form } from 'antd';

export default class SacFormItem extends Form.Item {
  render() {
    const { children, ...props } = this.props;
    return (
      <Form.Item colon={false} {...props}>
        {children}
      </Form.Item>
    );
  }
}

import React from 'react';
import { Modal } from 'antd';

export default class SacModal extends Modal {
  render() {
    const { children, ...props } = this.props;
    return <Modal {...props}>{children}</Modal>;
  }
}

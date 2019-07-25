import React from 'react';
import { Form, Divider } from 'antd';

import { SacText } from 'components/SacText';
import { SacButton } from 'components/SacButton';

export default class SacForm extends Form {
  render() {
    const { title, divider, edit, ...props } = this.props;
    return (
      <Form {...props}>
        {title && (
          <SacText style={{ fontSize: '20px' }} level={4}>
            {title}
          </SacText>
        )}
        {edit && (
          <SacButton
            style={{
              float: 'right',
              fontSize: '18px',
              width: 63,
              height: 32
            }}
            type='link'
          >
            Edit
          </SacButton>
        )}
        {divider && (
          <Divider style={{ marginTop: '10px', marginBottom: '15px' }} />
        )}
        {this.props.children}
      </Form>
    );
  }
}

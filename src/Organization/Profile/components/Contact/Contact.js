import React, { Component } from 'react';

import { Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacSelect } from 'components/SacSelect';
import { SacOption } from 'components/SacOption';
import { SacButton } from 'components/SacButton';
import { SacText } from 'components/SacText';

import { formItemLayout } from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

class Contact extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <SacForm
        style={{ marginTop: '40px', color: '#525a65' }}
        layout='horizontal'
        title={
          <SacText style={{ color: '#525a65' }}>
            {upperCaseString('contact')}
          </SacText>
        }
        edit
        divider
      >
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('contact name')}
        >
          {getFieldDecorator('contact_name', {
            rules: [
              {
                required: true,
                message: 'Please enter your contact name!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('contact role')}
        >
          {getFieldDecorator('contact_role', {
            rules: [
              {
                required: true,
                message: 'Please add contact role!'
              }
            ]
          })(
            <SacSelect>
              <SacOption value='test1'>Test 1</SacOption>
              <SacOption value='test2'>Test 2</SacOption>
            </SacSelect>
          )}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('phone number')}
        >
          {getFieldDecorator('phone_number', {
            rules: [
              {
                required: true,
                message: 'Please enter your phone number!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem {...formItemLayout} label={upperCaseString('email')}>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please enter your email!'
              },
              {
                type: 'email',
                message: 'Please enter right email format!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('confirm email')}
        >
          {getFieldDecorator('confirm_email', {
            rules: [
              {
                required: true,
                message: 'Please enter your email!'
              },
              {
                type: 'email',
                message: 'Please enter right email format!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem>
          <SacButton
            type='link'
            style={{
              display: 'flex',
              fontSize: '20px',
              justifyContent: 'space-between',
              color: '#124DBB',
              float: 'right',
              padding: 0
            }}
          >
            Add another contact
            <Icon
              theme='filled'
              style={{ fontSize: '30px' }}
              type='plus-circle'
            />
          </SacButton>
        </SacFormItem>
      </SacForm>
    );
  }
}

export const ContactForm = SacForm.create({
  name: 'contact'
})(Contact);

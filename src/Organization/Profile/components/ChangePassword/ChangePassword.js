import React, { Component } from 'react';

import { Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacText } from 'components/SacText';

import {
  formItemLayout,
  actionButton
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

class ChangePassword extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <SacForm
        style={{ marginTop: '40px' }}
        layout='horizontal'
        title={
          <SacText style={{ color: '#525a65' }}>
            {upperCaseString('change password')}
          </SacText>
        }
        edit
        divider
      >
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('current password')}
        >
          {getFieldDecorator('current_password', {
            rules: [
              {
                required: true,
                message: 'Please enter your contact name!'
              }
            ]
          })(
            <SacInput.Password
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
          label={upperCaseString('new password')}
        >
          {getFieldDecorator('new_password', {
            rules: [
              {
                required: true,
                message: 'Please add password!'
              }
            ]
          })(
            <SacInput.Password
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
          label={upperCaseString('confirm password')}
        >
          {getFieldDecorator('confirm_password', {
            rules: [
              {
                required: true,
                message: 'Please enter confirm password!'
              }
            ]
          })(
            <SacInput.Password
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
          <SacButton style={{ float: 'right', ...actionButton }}>
            Update
          </SacButton>
        </SacFormItem>
        <SacFormItem>
          <SacRow>
            <SacCol xs={20} xxl={{ span: 16, offset: 8 }}>
              <ul
                style={{
                  textAlign: 'left',
                  paddingLeft: '0',
                  color: '#b4b4b4'
                }}
              >
                <li> Your password has to be at least 6 characters long.</li>
                <li> Must contain at least one lower case letter,</li>
                <li> one upper case letter,</li>
                <li> one digit.</li>
                <li> at least one special character ~!@#$%^&*()_+</li>
              </ul>
            </SacCol>
          </SacRow>
        </SacFormItem>
      </SacForm>
    );
  }
}

export const ChangePasswordForm = SacForm.create({
  name: 'change_password'
})(ChangePassword);

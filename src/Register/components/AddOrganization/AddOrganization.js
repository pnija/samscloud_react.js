import React, { Component, Fragment } from 'react';

import { Divider, Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacSelect } from 'components/SacSelect';
import { SacOption } from 'components/SacOption';

import {
  formItemLayout,
  actionButton
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

class AddOrganization extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { verifyEmail, verifyEmailError } = this.props;
    return (
      <Fragment>
        <p style={{ textAlign: 'left', fontSize: '16px' }}>
          {upperCaseString('Add your organization')}
        </p>
        <Divider />
        <SacForm {...formItemLayout}>
          <SacFormItem label={upperCaseString('organization name')}>
            {getFieldDecorator('organization_name', {
              rules: [
                {
                  required: true,
                  message: 'Please organization name!'
                }
              ]
            })(<SacInput />)}
          </SacFormItem>
          <SacFormItem label={upperCaseString('contact name')}>
            {getFieldDecorator('contact_name', {
              rules: [
                {
                  required: true,
                  message: 'Please add contact name!'
                }
              ]
            })(<SacInput />)}
          </SacFormItem>
          <SacFormItem label={upperCaseString('contact role')}>
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
          <SacFormItem label={upperCaseString('email')}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please add email!'
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
          <SacFormItem label={upperCaseString('confirm email')}>
            {getFieldDecorator('confirm_email', {
              rules: [
                {
                  required: true,
                  message: 'Please add confirm email!'
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
          <p
            style={{
              textAlign: 'right',
              fontSize: '16px',
              paddingRight: '30px'
            }}
          >
            {upperCaseString("let's verify your email")}
          </p>
          <Divider />
          <SacFormItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SacButton
              onClick={this.props.navigateLogin}
              style={{ width: '150px', ...actionButton }}
              type='default'
            >
              Back
            </SacButton>

            <SacButton
              onClick={verifyEmail}
              style={{ marginLeft: '10px', width: '150px', ...actionButton }}
              type='default'
            >
              Verify
            </SacButton>
            <SacButton
              onClick={verifyEmailError}
              style={{ marginLeft: '10px', width: '150px', ...actionButton }}
              type='default'
            >
              Error
            </SacButton>
          </SacFormItem>
        </SacForm>
      </Fragment>
    );
  }
}

export const AddOrganizationForm = SacForm.create({
  name: 'add_organization'
})(AddOrganization);

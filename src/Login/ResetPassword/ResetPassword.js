import React, { Component } from 'react';

import { SacDefaultScreen } from 'components/SacDefaultScreen';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacButton } from 'components/SacButton';
import { SacInput } from 'components/SacInput';
import { SacTitle } from 'components/SacTitle';

import {
  spacingTopMd,
  spacingBottomMd
} from 'commons/utils/defaultCssVariables';

import samscloudSquare from 'assets/images/samscloud-square.svg';

class ResetPassword extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { ...props } = this.props;
    return (
      <SacDefaultScreen {...props}>
        <SacRow justify='center' type='flex'>
          <SacCol xxl={24} xl={24} lg={24}>
            <img
              style={{ marginBottom: spacingBottomMd, marginTop: spacingTopMd }}
              src={samscloudSquare}
              alt='logo-square'
            />
            <SacTitle style={{ marginTop: spacingTopMd }} level={4}>
              Reset Your Password
            </SacTitle>
          </SacCol>
          <SacCol xxl={4} xl={5} lg={12} xs={24}>
            <SacForm
              style={{ marginTop: spacingTopMd }}
              onSubmit={this.handleSubmit}
              className='login-form'
            >
              <SacFormItem>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your password!' }
                  ]
                })(<SacInput.Password placeholder='Password' />)}
              </SacFormItem>
              <SacFormItem>
                {getFieldDecorator('re_password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please re-enter your password!'
                    }
                  ]
                })(
                  <SacInput.Password
                    type='password'
                    placeholder='Re-Enter Password'
                  />
                )}
              </SacFormItem>
              <ul style={{ textAlign: 'left', paddingLeft: '0', color: '#b4b4b4' }}>
                <li> Your password has to be at least 6 characters long.</li>
                <li> Must contain at least one lower case letter,</li>
                <li> one upper case letter,</li>
                <li> one digit.</li>
                <li> at least one special character ~!@#$%^&*()_+</li>
              </ul>
              <SacFormItem>
                <SacButton
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  style={{ marginTop: spacingTopMd }}
                >
                  Reset
                </SacButton>
              </SacFormItem>
            </SacForm>
          </SacCol>
        </SacRow>
      </SacDefaultScreen>
    );
  }
}

export const ResetPasswordForm = SacForm.create({ name: 'normal_login' })(
  ResetPassword
);

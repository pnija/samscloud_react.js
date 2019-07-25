import React, { Component } from 'react';

import { SacModal } from 'components/SacModal';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacButton } from 'components/SacButton';
import { SacInput } from 'components/SacInput';
import { SacText } from 'components/SacText';
import { upperCaseString } from 'commons/utils';
import { formItemLayout, spacingTop } from 'commons/utils/defaultCssVariables';

class ForgotPassword extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      visible,
      loading,
      handleOk,
      handleNotOK,
      forgotPassword,
      handleCancel
    } = this.props;

    return (
      <SacModal
        title={upperCaseString('reset password')}
        visible={visible}
        closable
        mask
        maskClosable
        footer={[
          <SacButton
            key='submit'
            type='primary'
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </SacButton>,
          <SacButton
            key='error'
            type='primary'
            loading={loading}
            onClick={handleNotOK}
          >
            Error
          </SacButton>,
          <SacButton key='back' onClick={handleCancel}>
            Cancel
          </SacButton>
        ]}
      >
        <SacText>
          Enter the email you used to create your account and we’ll send you
          instructions to reset your password.
        </SacText>
        <br />
        <SacForm style={{ marginTop: spacingTop }} {...formItemLayout}>
          <SacFormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please add email!'
                }
              ]
            })(<SacInput placeholder='Email' />)}
          </SacFormItem>
          <SacFormItem style={{ marginBottom: '0' }}>
            <SacButton
              onClick={forgotPassword}
              style={{ padding: '0' }}
              type='link'
            >
              No confirmation email?
            </SacButton>
          </SacFormItem>
        </SacForm>
      </SacModal>
    );
  }
}

export const ForgotPasswordForm = SacForm.create({
  name: 'forgot_password'
})(ForgotPassword);

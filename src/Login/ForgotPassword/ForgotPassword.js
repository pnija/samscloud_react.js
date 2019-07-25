import React, { Component } from 'react';

import { SacDefaultScreen } from 'components/SacDefaultScreen';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacTitle } from 'components/SacTitle';

import { ForgotPasswordForm } from '../components/ForgotPassword';

import { upperCaseString } from 'commons/utils';
import { actionButton } from 'commons/utils/defaultCssVariables';
import { SacText } from 'components/SacText';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotPassword: false
    };
  }
  setForgotPassword = () => {
    this.setState({
      forgotPassword: true
    });
  };
  handleCancel = () => {
    this.setState({
      forgotPassword: false
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { ...props } = this.props;
    return (
      <SacDefaultScreen {...props}>
        <SacRow type='flex' justify='center' align='top'>
          <SacCol xs={24} xxl={8} xl={10} lg={12}>
            <SacTitle
              style={{ textAlign: 'left', marginTop: '40px' }}
              level={3}
            >
              {upperCaseString('No confirmation email? ')}
            </SacTitle>
            <SacTitle
              style={{
                marginTop: '40px',
                textAlign: 'left',
                fontWeight: 100,
                fontSize: '16px'
              }}
              level={4}
            >
              {upperCaseString('Please try the following:')}
            </SacTitle>
            <ul
              style={{ textAlign: 'left', marginTop: '40px', color: '#a8acb2' }}
            >
              <li>Check your junk e-mail folder.</li>
              <li>Check your inbox again in 5 minutes.</li>
              <li>
                Submit your email below and we will resend your confirmation
                instructions.
              </li>
              <li>
                If you have signed up using a Gmail account, please note that
                the confirmation email might have been automatically placed on
                the promotions/updates tab.
              </li>
            </ul>
            <SacForm style={{ marginTop: '60px' }} layout='vertical'>
              <SacFormItem label={upperCaseString('Let’s try again:')}>
                <SacRow type='flex' justify='start' align='bottom'>
                  <SacCol xs={16}>
                    {getFieldDecorator('email', {})(
                      <SacInput placeholder='Email' />
                    )}
                  </SacCol>
                  <SacCol xs={8}>
                    <SacButton
                      onClick={this.setForgotPassword}
                      style={{ width: '80%', float: 'right', ...actionButton }}
                    >
                      Resend
                    </SacButton>
                  </SacCol>
                </SacRow>
              </SacFormItem>
            </SacForm>
            <SacText style={{ float: 'left', color: '#000' }}>
              Still having problems? Contact our support team at
              <a href='mailto:support@samscloud.io'> support@samscloud.io</a>
            </SacText>
            <SacButton
              onClick={this.setForgotPassword}
              style={{ float: 'left', padding: '0' }}
              type='link'
            >
              Forgotten your password?
            </SacButton>
          </SacCol>
        </SacRow>
        <ForgotPasswordForm
          handleCancel={this.handleCancel}
          visible={this.state.forgotPassword}
        />
      </SacDefaultScreen>
    );
  }
}

export const ForgotPasswordScreenForm = SacForm.create({
  name: 'normal_login'
})(ForgotPasswordScreen);

import React, { Component } from 'react';

import { notification, Icon } from 'antd';

import { SacDefaultScreen } from 'components/SacDefaultScreen';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';

import { SacTitle } from 'components/SacTitle';

import { SelectOrganizationForm } from '../components/SelectOrganization';
import { AddOrganizationForm } from '../components/AddOrganization';
import { EmailVerifySent } from '../components/EmailVerifySent';

import { upperCaseString } from 'commons/utils';
import {
  notificationDefault,
  notificationError
} from 'commons/utils/defaultCssVariables';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleVerifyEmail: false
    };
  }
  navigateLogin = () => {
    this.props.history.push('/');
  };
  verifyEmail = () => {
    this.setState({
      visibleVerifyEmail: true
    });
  };
  verifyEmailError = () => {
    notification['error']({
      message: upperCaseString('ERROR. The email entered is already in use.'),
      icon: <Icon type='close-circle' style={{ color: '#ffffff' }} />,
      style: {
        ...notificationDefault,
        ...notificationError
      }
    });
  };
  handleClose = () => {
    this.setState({
      visibleVerifyEmail: false
    });
  };
  render() {
    const { ...props } = this.props;
    return (
      <SacDefaultScreen {...props}>
        <SacRow type='flex' justify='center'>
          <SacCol
            style={{ paddingTop: '40px' }}
            xxl={8}
            xl={10}
            lg={10}
            xs={24}
          >
            <SacTitle style={{ textAlign: 'left', fontSize: '24px' }} level={2}>
              {upperCaseString('Register your organization')}
            </SacTitle>
            <SelectOrganizationForm />
            <AddOrganizationForm
              verifyEmailError={this.verifyEmailError}
              verifyEmail={this.verifyEmail}
              navigateLogin={this.navigateLogin}
            />
          </SacCol>
        </SacRow>
        <EmailVerifySent
          visible={this.state.visibleVerifyEmail}
          handleClose={this.handleClose}
        />
      </SacDefaultScreen>
    );
  }
}

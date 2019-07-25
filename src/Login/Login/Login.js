import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { notification, Icon } from 'antd';

import { SacDefaultScreen } from 'components/SacDefaultScreen';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacButton } from 'components/SacButton';
import { ForgotPasswordForm } from '../components/ForgotPassword';
import { ForgotPasswordResult } from '../components/ForgotPasswordResult';

import { SacTitle } from 'components/SacTitle';
import { SacText } from 'components/SacText';
import { SacInput } from 'components/SacInput';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacCheckbox } from 'components/SacCheckbox';

import samscloudSquare from 'assets/images/samscloud-square.svg';

import {
  spacingTopMd,
  spacingBottomMd,
  notificationDefault,
  notificationError
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';
import { loginUser,registerUser} from '../../actions/action.user';
import { bindActionCreators } from 'redux';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleFGResult: false,
      stateResultFG: 'error'
    };
    console.log("kk",this.props)
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleNotOk = e => {
    console.log('Not Ok nak');
    this.setState({
      visible: false,
      visibleFGResult: true,
      stateResultFG: 'error'
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
      visibleFGResult: true,
      stateResultFG: 'success'
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleCloseFGResult = e => {
    this.setState({
      visibleFGResult: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  forgotPassword = () => {
    this.props.history.push('/forgot-password');
  };

  loginSuccess = () => {
    this.props.history.push('/organization/profile');
  };

  loginError = () => {
    notification['error']({
      message: upperCaseString(
        'ERROR. INCORRECT USER NAME/PASSWORD COMBINATION'
      ),
      icon: <Icon type='close-circle' style={{ color: '#ffffff' }} />,
      style: {
        fontSize: '12px',
        color: '#7b211b',
        ...notificationDefault,
        ...notificationError
      }
    });
  };

  navigateRegister = () => {
    this.props.history.push('/register');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { ...props } = this.props;
    console.log("iiii",this.props.form)
    return (
      <SacDefaultScreen {...props}>
        <SacRow justify='center' type='flex'>
          <SacCol xxl={24} xl={24} lg={24}>
            <img
              style={{ marginBottom: spacingBottomMd, marginTop: spacingTopMd }}
              src={samscloudSquare}
              alt='logo-square'
            />
            <SacTitle style={{ color: '#0a0a0a' }} level={3}>
              Welcome to Samscloud
            </SacTitle>
          </SacCol>
          <SacCol xxl={4} xl={5} lg={12}>
            <SacText style={{ color: '#6b6e70' }}>
              Samscloud intelligent security platform helps organizations
              streamline their response and crisis management plans.
            </SacText>
            <br />
            <SacText style={{ color: '#6b6e70' }}>Login and see it in action.</SacText>
            <br />
            <SacForm
              style={{ marginTop: '15px' }}
              onSubmit={this.handleSubmit}
              className='login-form'
            >
              <SacFormItem>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(<SacInput placeholder='Username' />)}
              </SacFormItem>
              <SacFormItem>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'please input your Password!' }
                  ]
                })(<SacInput type='password' placeholder='Password' />)}
              </SacFormItem>
              <SacFormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <SacCheckbox style={{ float: 'left' }}>
                    Remember me
                  </SacCheckbox>
                )}
              </SacFormItem>
              <SacFormItem>
                <SacButton
                  onClick={this.loginSuccess}
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Log in
                </SacButton>
                <SacButton
                  onClick={this.loginError}
                  type='danger'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Log in error
                </SacButton>
                <SacButton
                  onClick={this.showModal}
                  type='link'
                  className='login-form-forgot'
                >
                  Forgot password
                </SacButton>
              </SacFormItem>
              <SacText style={{ color: '#909090' }}>
                Do not have an account?
              </SacText>
              <SacFormItem>
                <SacButton
                  style={{ color: '#676a6c' }}
                  type='default'
                  htmlType='submit'
                  className='login-form-button'
                  onClick={this.navigateRegister}
                >
                  Create an account
                </SacButton>
              </SacFormItem>
            </SacForm>
          </SacCol>
          <SacCol xxl={24} xl={24} lg={24}>
            <SacText style={{ color: '#676a6c' }}>
              Create an account and optimize your organizations crisis strategy.
            </SacText>
          </SacCol>
        </SacRow>
        <ForgotPasswordForm
          visible={this.state.visible}
          handleOk={this.handleOk}
          forgotPassword={this.forgotPassword}
          handleNotOK={this.handleNotOk}
          handleCancel={this.handleCancel}
        />
        <ForgotPasswordResult
          visible={this.state.visibleFGResult}
          state={this.state.stateResultFG}
          handleClose={this.handleCloseFGResult}
        />
      </SacDefaultScreen>
    );
  }
}
// const mapStateToProps = state => ({

//   errors: state.auth.errors,
//   session: state.auth.session
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
// loginUser,registerUser
// }, dispatch) 
export const LoginForm = SacForm.create({ name: 'normal_login' })(Login);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps),(LoginForm));

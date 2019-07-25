import React, { Component } from 'react';

import { Breadcrumb, Switch, Dropdown, Icon, Menu } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacInput } from 'components/SacInput';
import { SacFormItem } from 'components/SacFormItem';
import { SacTitle } from 'components/SacTitle';
import { SacButton } from 'components/SacButton';

import { SacSidebarScreen } from 'components/SacSidebarScreen';

import {
  defaultTitleOrganizationStyle,
  formItemLayoutUserInvite,
  formItemLayoutButtonUserInvite,
  actionButton
} from 'commons/utils/defaultCssVariables';

import { upperCaseString } from 'commons/utils';
import { SacText } from 'components/SacText';
import { SacSelect } from 'components/SacSelect';
import { SacTextArea } from 'components/SacTextArea';
import { SacCheckbox } from 'components/SacCheckbox';
import { SacParagraph } from 'components/SacParagraph';

import './inviteUsers.scss';

const { Option } = SacSelect;

class InviteUsers extends Component {
  navigateInviteProcode = () => {
    this.props.history.push('/admin/users/invite/procode');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.samscloud.com/'
          >
            Send a personalize message
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.samscloud.com/'
          >
            Send a personalize message 2
          </a>
        </Menu.Item>
      </Menu>
    );
    const optionList = [];
    for (let i = 10; i < 36; i++) {
      optionList.push(<Option key={i.toString(36) + i}>{'Group' + i}</Option>);
    }
    return (
      <SacSidebarScreen>
        <SacRow
          gutter={16}
          style={{ padding: '1% 0', backgroundColor: '#fff' }}
        >
          <SacCol
            style={{
              padding: '0 30px'
            }}
            xs={24}
            xxl={6}
            xl={8}
            lg={10}
          >
            <SacTitle
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                ...defaultTitleOrganizationStyle
              }}
              level={3}
            >
              Invite Users
            </SacTitle>
            <Breadcrumb style={{ marginLeft: '20px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Admin</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Users</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </SacCol>
        </SacRow>
        <SacRow
          type='flex'
          justify='center'
          gutter={16}
          style={{
            marginTop: '40px'
          }}
        >
          <SacCol xs={24} lg={10}>
            <SacButton
              onClick={this.navigateInviteProcode}
              type='link'
              style={{
                float: 'right',
                fontFamily: 'OpenSans-Bold',
                color: '#4a90e2'
              }}
            >
              Need to mass invite, use a ProCode{' '}
            </SacButton>
          </SacCol>
          <SacCol xs={24} lg={16}>
            <SacForm>
              <SacFormItem {...formItemLayoutUserInvite} label={<SacText />}>
                <SacParagraph
                  style={{ marginBottom: 0, height: 25, color: '#706e6b' }}
                >
                  We’ll invite new users to Samscloud and get them onboarded.
                </SacParagraph>
                <SacParagraph
                  style={{ marginBottom: 0, height: 20, color: '#706e6b' }}
                >
                  They can enter their name and other detail during signup.
                </SacParagraph>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={upperCaseString('Email Address(es)')}
                style={{ lineHeight: 10 }}
                {...formItemLayoutUserInvite}
              >
                {getFieldDecorator('emailAddress', {
                  rules: []
                })(<SacInput placeholder='Place holder text' />)}
                <SacText>
                  To send multiple emails (5 max) separate email addresses with
                  a ( ; )
                </SacText>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={upperCaseString('Role')}
                {...formItemLayoutUserInvite}
              >
                {getFieldDecorator('role', {
                  rules: []
                })(<SacSelect />)}
                <SacText>
                  You can specify a role for the users listed on this invite
                </SacText>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={upperCaseString('Group membership')}
                {...formItemLayoutUserInvite}
              >
                {getFieldDecorator('groupMembership', {
                  rules: []
                })(<SacSelect mode='multiple'>{optionList}</SacSelect>)}
                <SacText>
                  Add new users to a group to manage access, authorizations and
                  permissions.
                </SacText>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={<SacText />}
                style={{ marginBottom: 5 }}
                {...formItemLayoutUserInvite}
              >
                <Dropdown overlay={menu}>
                  <a className='ant-dropdown-link' href='/'>
                    Send a personalize message <Icon type='caret-down' />
                  </a>
                </Dropdown>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={upperCaseString('Personalize the Invite')}
                {...formItemLayoutUserInvite}
              >
                {getFieldDecorator('personalizeInvite', {
                  rules: []
                })(<SacTextArea style={{ height: '120px' }} />)}
                <SacCheckbox style={{ float: 'right' }}>Send Email</SacCheckbox>
                <SacParagraph
                  style={{
                    float: 'right',
                    width: '100%',
                    textAlign: 'right',
                    marginTop: 20
                  }}
                >
                  Allow Users To Share Invite{' '}
                  <Switch style={{ fontSize: 20 }} />
                </SacParagraph>
              </SacFormItem>
              <SacFormItem
                className='invite-user-wrapper'
                label={upperCaseString('User with emails ')}
                {...formItemLayoutUserInvite}
              >
                {getFieldDecorator('userWithEmail', {
                  rules: []
                })(<SacInput placeholder='Place holder text' />)}
                <SacText>
                  To add multiple emails seperate addresses with a ( ; )
                </SacText>
              </SacFormItem>
              <SacFormItem
                label={<SacText />}
                {...formItemLayoutButtonUserInvite}
              >
                <SacButton
                  style={{
                    color: '#4a90e2',
                    float: 'left',
                    width: 94,
                    ...actionButton
                  }}
                >
                  Cancel
                </SacButton>
                <SacButton
                  style={{
                    color: '#124dbb',
                    float: 'right'
                  }}
                >
                  Invite User(s)
                </SacButton>
              </SacFormItem>
            </SacForm>
          </SacCol>
        </SacRow>
      </SacSidebarScreen>
    );
  }
}

export const AdminUsersInviteForm = SacForm.create({ name: 'invite_user' })(
  InviteUsers
);

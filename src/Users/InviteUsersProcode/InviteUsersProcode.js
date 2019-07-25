import React, { Component } from 'react';

import { Breadcrumb, Dropdown, Icon, Menu, Upload } from 'antd';

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
  formItemLayoutUserProcodeInvite,
  formItemLayoutButtonUserProcodeInvite,
  actionButton
} from 'commons/utils/defaultCssVariables';

import { upperCaseString } from 'commons/utils';
import { SacText } from 'components/SacText';
import { SacSelect } from 'components/SacSelect';
import { SacTextArea } from 'components/SacTextArea';
import { SacParagraph } from 'components/SacParagraph';

import './inviteUsersProcode.scss';
import { SacCard } from 'components/SacCard';

const { Option } = SacSelect;
const { Dragger } = Upload;

class InviteUsersProcode extends Component {
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
              Pro-Code Invite
            </SacTitle>
            <Breadcrumb style={{ marginLeft: '20px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Admin</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Users</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Invite Users</a>
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
          <SacCol xs={24} md={20} lg={20} xl={18} xxl={16}>
            <SacRow className='procode-content' gutter={24}>
              <SacCol xs={24} sm={24} md={16} lg={16} xl={16}>
                <SacForm>
                  <SacFormItem
                    className='invite-user-wrapper'
                    {...formItemLayoutUserProcodeInvite}
                    label={<SacText />}
                  >
                    <SacParagraph style={{ marginBottom: 5 }}>
                      <SacText style={{ color: '#706e6b' }}>
                        Let’s create a private Pro-Code that can be sent to a
                        list of users to join Samscloud and get them onboarded.
                        They will have the opportunity to enter their name and
                        other detail during signup.
                      </SacText>
                    </SacParagraph>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Import List  (csv)')}
                    style={{ lineHeight: 10 }}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('importList', {
                      rules: []
                    })(
                      <Dragger
                        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                        style={{ height: 30 }}
                        directory
                      >
                        <SacButton style={{ height: 30, color: '#124dbb' }}>
                          <Icon type='upload' /> Upload Files
                        </SacButton>
                        <SacText> or Drop Files</SacText>
                      </Dragger>
                    )}
                    <SacText>
                      Only users on this list will be able to join through this
                      Pro-Code Invite
                    </SacText>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Select a Procode ')}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('selectProcode', {
                      rules: []
                    })(<SacSelect />)}
                    <SacText>Use one of your organization procodes</SacText>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Enter a New Code')}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('groupMembership', {
                      rules: []
                    })(<SacInput />)}
                    <SacText>
                      Create a private code for the invited users to subcribe
                    </SacText>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Brief Description ')}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('brefDescription', {
                      rules: []
                    })(
                      <SacTextArea
                        style={{ height: 40 }}
                        placeholder={'CYCOUGS - Teachers'}
                      />
                    )}
                    <SacText>Give a breif discription of this Group.</SacText>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Assign to a Role')}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('assignRole', {
                      rules: []
                    })(<SacSelect />)}
                    <SacText>
                      You can specify a role for the users listed on this invite
                    </SacText>
                  </SacFormItem>

                  <SacFormItem
                    className='invite-user-wrapper'
                    label={upperCaseString('Name this Group ')}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    {getFieldDecorator('userWithEmail', {
                      rules: []
                    })(<SacInput placeholder='Place holder text' />)}
                    <SacText>
                      You can add this group to other groups and add new members
                      in{' '}
                      <SacButton style={{ paddingLeft: 0 }} type='link'>
                        groups.{' '}
                      </SacButton>
                    </SacText>
                  </SacFormItem>
                  <SacFormItem
                    className='invite-user-wrapper'
                    label={<SacText />}
                    style={{ marginBottom: 5 }}
                    {...formItemLayoutUserProcodeInvite}
                  >
                    <Dropdown overlay={menu}>
                      <a className='ant-dropdown-link' href='/'>
                        Send a personalize message <Icon type='caret-down' />
                      </a>
                    </Dropdown>
                  </SacFormItem>
                  <SacFormItem
                    label={<SacText />}
                    {...formItemLayoutButtonUserProcodeInvite}
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
                      Get Code
                    </SacButton>
                  </SacFormItem>
                </SacForm>
              </SacCol>
              <SacCol xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                <SacCard style={{ minHeight: 180 }}>
                  <Dragger style={{ minHeight: 150 }}>
                    <Icon style={{ fontSize: 48 }} type='upload' />
                    <p className='ant-upload-text'>Drop Files</p>
                  </Dragger>
                </SacCard>
              </SacCol>
            </SacRow>
          </SacCol>
        </SacRow>
      </SacSidebarScreen>
    );
  }
}

export const InviteUsersProcodeForm = SacForm.create({ name: 'invite_user' })(
  InviteUsersProcode
);

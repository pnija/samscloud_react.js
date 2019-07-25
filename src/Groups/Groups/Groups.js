/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';

import { Table, Tag, Breadcrumb, Icon, Avatar, List } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacTitle } from 'components/SacTitle';
import { SacInput } from 'components/SacInput';
import { SacSelect } from 'components/SacSelect';
import { SacFormItem } from 'components/SacFormItem';

import { SacSidebarScreen } from 'components/SacSidebarScreen';

import {
  defaultTitleOrganizationStyle,
  actionButton,
  actionBorderButton
} from 'commons/utils/defaultCssVariables';
import { SacText } from 'components/SacText';
import { SacButton } from 'components/SacButton';

import './groups.scss';
import { SacParagraph } from 'components/SacParagraph';
import { SacModal } from 'components/SacModal';
import { SacCheckbox } from 'components/SacCheckbox';

const SacButtonGroup = SacButton.Group;
const { Option } = SacSelect;

class AdminGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCreateGroup: false
    };
  }
  createGroup = () => {
    this.setState({
      modalCreateGroup: !this.state.modalCreateGroup
    });
  };

  handleOk = e => {
    this.setState({
      modalCreateGroup: false
    });
  };

  handleCancel = e => {
    this.setState({
      modalCreateGroup: false
    });
  };

  render() {
    const dataSource = [];
    for (let i = 0; i < 6; i++) {
      const securityLevelList = ['High', 'Low', 'Medium', 'Default'];
      const activeStatus = ['Active', 'Inactive'];
      dataSource.push({
        key: i,
        GroupName: `Edrward ${i}`,
        Description: 'Grants access to full applications ',
        Members: i,
        ProCode: 'CYCOUGS-Admin',
        securityLevels: [
          securityLevelList[
            Math.floor(Math.random() * securityLevelList.length)
          ]
        ],
        tags: [activeStatus[Math.floor(Math.random() * activeStatus.length)]]
      });
    }
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i} label={'User' + i}>
          <span role='img' aria-label={'User ' + i}>
            <Avatar icon='user' />{' '}
          </span>
          <SacText style={{ marginLeft: 10 }}>{'User ' + i}</SacText>
        </Option>
      );
    }
    const columns = [
      {
        title: 'Group Name',
        dataIndex: 'GroupName',
        key: 'GroupName'
      },
      {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: 'Members',
        dataIndex: 'Members',
        key: 'Members'
      },
      {
        title: 'Pro-Code',
        dataIndex: 'ProCode',
        key: 'ProCode'
      },
      {
        title: 'Security Level',
        dataIndex: 'securityLevels',
        key: 'securityLevels',
        render: securityLevels => (
          <span>
            {securityLevels.map(securityLevel => {
              let colorTag = '';
              switch (securityLevel.toLowerCase()) {
                case 'high':
                  colorTag = '#d0021b';
                  break;
                case 'default':
                  colorTag = '#000';
                  break;
                case 'low':
                  colorTag = '#1ab394';
                  break;
                default:
                  colorTag = '#0085cc';
                  break;
              }
              return (
                <Tag
                  color='#fff'
                  style={{
                    background: '#fff',
                    border: `1px solid ${colorTag}`,
                    color: colorTag,
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'OpenSans-Bold',
                    padding: '4px',
                    width: 70,
                    height: 30
                  }}
                  key={securityLevel}
                >
                  {securityLevel}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Status',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              return (
                <Tag
                  color='#fff'
                  style={{
                    background: tag === 'Inactive' ? '#6488e3' : '#124DBB',
                    fontSize: 14,
                    fontFamily: 'OpenSans-Bold',
                    padding: '4px',
                    textAlign: 'center',
                    width: 70,
                    height: 30
                  }}
                  key={tag}
                >
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Action',
        dataIndex: 'Action',
        key: 'Action',
        render: () => (
          <SacButtonGroup>
            <SacButton value='a' style={{ color: '#4a90e2' }}>
              View
            </SacButton>
            <SacButton value='b' style={{ color: '#4a90e2' }}>
              Edit
            </SacButton>
            <SacButton type='danger' value='c'>
              Delete
            </SacButton>
          </SacButtonGroup>
        )
      }
    ];
    const { getFieldDecorator } = this.props.form;
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
              Groups
            </SacTitle>
            <Breadcrumb style={{ marginLeft: '20px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Admin</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Groups</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </SacCol>
        </SacRow>
        <SacRow
          gutter={16}
          style={{
            marginTop: '40px'
          }}
        >
          <SacCol
            xs={24}
            xxl={16}
            style={{
              backgroundColor: '#fff',
              paddingTop: '24px',
              paddingRight: '22px'
            }}
          >
            <SacRow gutter={24}>
              <SacCol xs={24} xxl={1} xl={1} lg={1} />
              <SacCol span={17}>
                {' '}
                <SacParagraph>
                  Manage product access and roles in bulk by adding users to
                  groups that have the required permissions. For example, add
                  users to the default “and they will be able to delete users.
                </SacParagraph>
              </SacCol>
              <SacCol span={6}>
                {' '}
                <SacButton
                  onClick={this.createGroup}
                  style={{
                    float: 'right',
                    marginLeft: '28px',
                    ...actionButton
                  }}
                >
                  Create a Group
                </SacButton>
              </SacCol>
            </SacRow>
          </SacCol>
          <SacCol xs={24} xxl={8} />
          <SacCol
            xs={24}
            xxl={16}
            style={{ backgroundColor: '#fff', paddingTop: 10 }}
          >
            <SacRow>
              <SacForm layout='horizontal'>
                <SacCol xs={24} xxl={1} xl={1} lg={1} />
                <SacCol xs={24} xxl={8} xl={6} lg={6}>
                  <SacFormItem label={<SacText>Name</SacText>}>
                    {getFieldDecorator('text', {
                      rules: []
                    })(<SacInput placeholder='Search by Name' />)}
                  </SacFormItem>
                </SacCol>
                <SacCol xs={24} xxl={2} xl={3} lg={3} />
              </SacForm>
            </SacRow>
          </SacCol>
          <SacCol xs={24} xxl={8} />
        </SacRow>
        <SacRow
          style={{
            marginTop: '40px'
          }}
        >
          <SacCol
            style={{ backgroundColor: '#fff', padding: '31px 22px 38px 18px' }}
            xs={24}
            xxl={16}
          >
            <Table columns={columns} dataSource={dataSource} />
          </SacCol>
          <SacCol xs={24} xxl={8} />
        </SacRow>
        <SacRow
          style={{
            marginTop: '40px'
          }}
        >
          <SacCol xs={24} xxl={16}>
            <SacButton
              style={{
                color: '#4a90e2',
                float: 'right',
                width: 94
              }}
            >
              Close
            </SacButton>
          </SacCol>
        </SacRow>
        {/* <SacModal
          width={580}
          title={
            <SacParagraph
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#000',
                marginBottom: 0
              }}
            >
              Create Group
            </SacParagraph>
          }
          visible={this.state.modalCreateGroup}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <SacRow type='flex' justify='center'>
            <SacCol span={20}>
              <SacForm onSubmit={this.handleSubmit} className='login-form'>
                <SacFormItem
                  style={{ marginBottom: 0 }}
                  label={<SacText>Group Name </SacText>}
                >
                  {getFieldDecorator('groupName', {
                    rules: []
                  })(
                    <Fragment>
                      <SacInput placeholder='Name' />
                      <SacParagraph style={{ fontSize: 12, height: 50 }}>
                        You will not be able to change the group name once
                        created.
                      </SacParagraph>
                    </Fragment>
                  )}
                </SacFormItem>
                <SacFormItem
                  style={{ marginBottom: 0 }}
                  label={<SacText>Brief Description </SacText>}
                >
                  {getFieldDecorator('describeGroup', {
                    rules: []
                  })(
                    <Fragment>
                      <SacInput placeholder='Describe this group ' />
                      <SacParagraph style={{ fontSize: 12, height: 50 }}>
                        Adding a description will help organize and manage your
                        organizations groups .
                      </SacParagraph>
                    </Fragment>
                  )}
                </SacFormItem>
                <SacFormItem style={{ marginBottom: 0, minHeight: 50 }}>
                  {getFieldDecorator('addMembers', {
                    valuePropName: 'checked'
                  })(
                    <SacCheckbox>
                      Add Members to the group in the next step
                    </SacCheckbox>
                  )}
                  <SacRow style={{ marginTop: 60 }}>
                    <SacCol span={24}>
                      <SacButton
                        style={{ float: 'right', ...actionButton }}
                        type='primary'
                        htmlType='submit'
                      >
                        Create Group
                      </SacButton>
                      <SacButton
                        style={{ ...actionBorderButton }}
                        type='link'
                        htmlType='submit'
                      >
                        Cancel
                      </SacButton>
                    </SacCol>
                  </SacRow>
                </SacFormItem>
              </SacForm>
            </SacCol>
          </SacRow>
        </SacModal> */}
        <SacModal
          width={580}
          title={
            <SacParagraph
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#000',
                marginBottom: 0
              }}
            >
              Add members to {'<group name>'}
            </SacParagraph>
          }
          visible={this.state.modalCreateGroup}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <SacRow type='flex' justify='center'>
            <SacCol span={20}>
              <SacForm onSubmit={this.handleSubmit} className='login-form'>
                <SacFormItem
                  style={{ marginBottom: 0 }}
                  label={<SacText>Users that will be added </SacText>}
                >
                  {getFieldDecorator('groupName', {
                    rules: []
                  })(
                    <Fragment>
                      <SacSelect
                        autoFocus={true}
                        className='card-zone-item-wrapper'
                        mode='multiple'
                        style={{
                          width: '100%',
                          zIndex: 100,
                          position: 'relative',
                          marginBottom: 10
                        }}
                        optionLabelProp='label'
                        placeholder='Please select'
                        defaultValue={['a10', 'c12']}
                        onChange={this.handleChange}
                        suffixIcon={<Icon type='caret-down' theme='filled' />}
                      >
                        {children}
                      </SacSelect>
                    </Fragment>
                  )}
                </SacFormItem>
                <SacFormItem style={{ marginBottom: 0, minHeight: 50 }}>
                  <SacRow style={{ marginTop: 60 }}>
                    <SacCol span={24}>
                      <SacButton
                        style={{ float: 'right', ...actionButton }}
                        type='primary'
                        htmlType='submit'
                      >
                        Create Group
                      </SacButton>
                      <SacButton
                        style={{ ...actionBorderButton }}
                        type='link'
                        htmlType='submit'
                      >
                        Cancel
                      </SacButton>
                    </SacCol>
                  </SacRow>
                </SacFormItem>
              </SacForm>
            </SacCol>
          </SacRow>
        </SacModal>
      </SacSidebarScreen>
    );
  }
}

export const AdminGroupsForm = SacForm.create({ name: 'admin_user' })(
  AdminGroups
);

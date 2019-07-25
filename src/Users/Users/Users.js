import React, { Component } from 'react';

import { DatePicker, Table, Tag, Breadcrumb } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacTitle } from 'components/SacTitle';
import { SacInput } from 'components/SacInput';
import { SacFormItem } from 'components/SacFormItem';

import { SacSidebarScreen } from 'components/SacSidebarScreen';

import {
  defaultTitleOrganizationStyle,
  actionButton
} from 'commons/utils/defaultCssVariables';
import { SacText } from 'components/SacText';
import { SacButton } from 'components/SacButton';

import './users.scss';
import { SacParagraph } from 'components/SacParagraph';

const SacButtonGroup = SacButton.Group;

class AdminUsers extends Component {
  inviteUsers = () => {
    this.props.history.push('/admin/users/invite');
  };
  render() {
    const dataSource = [];
    for (let i = 0; i < 100; i++) {
      dataSource.push({
        key: i,
        User: `Edrward ${i}`,
        LastSeen: '5 min ago ',
        Role: `Admin`,
        DateAdded: '03/04/2015',
        DateModified: '03/04/2015',
        tags: ['Pending']
      });
    }
    const columns = [
      {
        title: 'User',
        dataIndex: 'User',
        key: 'User'
      },
      {
        title: 'Last Seen',
        dataIndex: 'LastSeen',
        key: 'LastSeen'
      },
      {
        title: 'Role',
        dataIndex: 'Role',
        key: 'Role'
      },
      {
        title: 'Date added',
        dataIndex: 'DateAdded',
        key: 'DateAdded'
      },
      {
        title: 'Date modified',
        dataIndex: 'DateModified',
        key: 'DateModified'
      },
      {
        title: 'Status',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => (
              <Tag
                color='#fff'
                style={{
                  background: '#124DBB',
                  fontSize: 14,
                  fontFamily: 'OpenSans-Bold',
                  padding: '4px',
                  width: 70,
                  height: 30
                }}
                key={tag}
              >
                {tag}
              </Tag>
            ))}
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
              Users
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
            <SacButton
              onClick={this.inviteUsers}
              style={{ float: 'right', marginLeft: '24px', ...actionButton }}
            >
              Invite Users
            </SacButton>
            <SacButton style={{ float: 'right', ...actionButton }}>
              Pro-Code Invite
            </SacButton>
          </SacCol>
          <SacCol xs={24} xxl={8} />
          <SacCol
            xs={24}
            xxl={16}
            style={{ backgroundColor: '#fff', paddingTop: 10 }}
          >
            <SacForm layout='horizontal'>
              <SacCol xs={24} xxl={1} xl={1} lg={1} />
              <SacCol xs={24} xxl={5} xl={6} lg={6}>
                <SacFormItem label={<SacText />}>
                  {getFieldDecorator('text', {
                    rules: []
                  })(<SacInput placeholder='Place holder text' />)}
                </SacFormItem>
              </SacCol>
              <SacCol xs={24} xxl={5} xl={6} lg={6}>
                <SacFormItem label={'Role'}>
                  {getFieldDecorator('role', {
                    rules: []
                  })(<SacInput placeholder='Role' />)}
                </SacFormItem>
              </SacCol>
              <SacCol xs={24} xxl={6} xl={6} lg={6}>
                <SacFormItem label={'Date filter'}>
                  {getFieldDecorator('date', {
                    rules: []
                  })(<DatePicker />)}
                </SacFormItem>
              </SacCol>
              <SacCol xs={24} xxl={2} xl={3} lg={3} />
              <SacCol xs={24} xxl={3} xl={3} lg={3}>
                <SacParagraph
                  style={{
                    float: 'left',
                    margin: '15%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    display: 'block'
                  }}
                >
                  Total Users:{' '}
                </SacParagraph>
              </SacCol>
              <SacCol xs={24} xxl={2} xl={2} lg={2} span={6}>
                <SacParagraph
                  style={{
                    fontSize: 32,
                    margin: '10% 25%',
                    color: '#000',
                    textAlign: 'right',
                    fontFamily: 'OpenSans-Bold'
                  }}
                >
                  45
                </SacParagraph>
              </SacCol>
            </SacForm>
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
      </SacSidebarScreen>
    );
  }
}

export const AdminUsersForm = SacForm.create({ name: 'admin_user' })(
  AdminUsers
);

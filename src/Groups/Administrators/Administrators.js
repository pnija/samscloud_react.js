/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';

import { Table, Tag, Breadcrumb, Switch } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacTitle } from 'components/SacTitle';
import { SacFormItem } from 'components/SacFormItem';

import { SacSidebarScreen } from 'components/SacSidebarScreen';

import {
  defaultTitleOrganizationStyle,
  actionButton
} from 'commons/utils/defaultCssVariables';
import { SacText } from 'components/SacText';
import { SacButton } from 'components/SacButton';

import { SacParagraph } from 'components/SacParagraph';
import { SacCard } from 'components/SacCard';

import './administrators.scss';

const SacButtonGroup = SacButton.Group;

class AdminAdministrators extends Component {
  createGroup = () => {
    this.props.history.push('/admin/administrators/invite');
  };
  render() {
    const dataSource = [];
    for (let i = 0; i < 6; i++) {
      const activeStatus = ['Active', 'Inactive'];
      dataSource.push({
        key: i,
        Users: `Edrward ${i}`,
        tags: [activeStatus[Math.floor(Math.random() * activeStatus.length)]]
      });
    }
    const columns = [
      {
        title: 'Users',
        dataIndex: 'Users',
        key: 'Users'
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
            <SacButton type='danger' value='c'>
              Remove
            </SacButton>
          </SacButtonGroup>
        )
      }
    ];
    const { getFieldDecorator } = this.props.form;
    return (
      <SacSidebarScreen>
        <SacRow
          className='administrator-container'
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
              Administrators
            </SacTitle>
            <Breadcrumb style={{ marginLeft: '20px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Admin</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='/'>Administrators</a>
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
              <SacCol span={11}>
                {' '}
                <SacTitle level={4} style={{ color: '#706e6b' }}>
                  Description:
                </SacTitle>
                <SacParagraph style={{ color: '#9b9b9b' }}>
                  This group is for site administrators with highest privilage
                  level
                </SacParagraph>
              </SacCol>
              <SacCol span={12}>
                <SacButton
                  onClick={this.createGroup}
                  style={{
                    float: 'right',
                    marginLeft: '24px',
                    ...actionButton
                  }}
                >
                  Delete Group
                </SacButton>
                <SacButton
                  onClick={this.createGroup}
                  style={{
                    float: 'right',
                    marginLeft: '24px',
                    ...actionButton
                  }}
                >
                  Edit Description
                </SacButton>
                <SacButton
                  onClick={this.createGroup}
                  style={{
                    float: 'right',
                    marginLeft: '24px',
                    ...actionButton
                  }}
                >
                  Add Members
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
              <SacForm layout='inline'>
                <SacCol xs={24} xxl={1} xl={1} lg={1} />
                <SacCol xs={24} xxl={23} xl={6} lg={6}>
                  <SacFormItem
                    style={{ float: 'right' }}
                    label={
                      <SacText style={{ color: '#706e6b' }}>
                        Group status
                      </SacText>
                    }
                  >
                    {getFieldDecorator('text', {
                      rules: []
                    })(<Switch />)}
                  </SacFormItem>
                </SacCol>
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
            <SacRow gutter={24}>
              <SacCol span={13}>
                <Table columns={columns} dataSource={dataSource} />
              </SacCol>
              <SacCol span={11}>
                <SacCard
                  className='administrator-group-card'
                  title={
                    <Fragment>
                      <SacText
                        style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                      >
                        Group Access
                      </SacText>
                      <SacText
                        style={{
                          color: '#000',
                          fontFamily: 'OpenSans-Bold',
                          float: 'right'
                        }}
                      >
                        Group Members
                      </SacText>
                    </Fragment>
                  }
                  style={{ width: '100%', float: 'right' }}
                  bodyStyle={{ padding: 5 }}
                >
                  <SacRow>
                    <SacCol span={16}>
                      <ol>
                        <li>Level 1</li>
                        <li>Level 2</li>
                        <li>All Access</li>
                      </ol>
                    </SacCol>
                    <SacCol span={8}>
                      <SacTitle style={{ color: '#706e6b' }}>45</SacTitle>
                    </SacCol>
                    <SacCol span={24}>
                      <SacButton
                        type='link'
                        style={{ float: 'right', color: '#4a90e2' }}
                      >
                        Edit Groups Access
                      </SacButton>
                    </SacCol>
                  </SacRow>
                </SacCard>
              </SacCol>
            </SacRow>
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

export const AdminAdministratorsForm = SacForm.create({ name: 'admin_user' })(
  AdminAdministrators
);

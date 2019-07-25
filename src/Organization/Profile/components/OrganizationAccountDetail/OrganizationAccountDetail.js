import React, { Component } from 'react';

import { Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacSelect } from 'components/SacSelect';
import { SacOption } from 'components/SacOption';
import { SacText } from 'components/SacText';
import { SacTextArea } from 'components/SacTextArea';
import { SacCheckboxGroup } from 'components/SacCheckboxGroup';

import { formItemLayout } from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

class OrganizationAccountDetail extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const serviceTypeOptions = [
      { label: 'Dispatch', value: 'dispatch' },
      { label: 'Alerts - SAMS', value: 'alertsSAMS' }
    ];
    const whoCanJoinOptions = [
      { label: 'Publish', value: 'publish' },
      { label: 'Private', value: 'private' }
    ];
    return (
      <SacForm
        style={{ marginTop: '40px', color: '#525a65' }}
        layout='horizontal'
        title={
          <SacText style={{ color: '#525a65' }}>
            {upperCaseString('Organization Account Details ')}
          </SacText>
        }
        divider
      >
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('organization name')}
        >
          {getFieldDecorator('organization_name', {
            rules: [
              {
                required: true,
                message: 'Please add organization name!'
              }
            ]
          })(<SacInput />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('phone number')}
        >
          {getFieldDecorator('phone_number', {
            rules: [
              {
                required: true,
                message: 'Please add phone name!'
              }
            ]
          })(<SacInput />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('organization type')}
        >
          {getFieldDecorator('organization_type', {
            rules: [
              {
                required: true,
                message: 'Please add organization type!'
              }
            ]
          })(
            <SacSelect>
              <SacOption value='test1'>Test 1</SacOption>
              <SacOption value='test2'>Test 2</SacOption>
            </SacSelect>
          )}
        </SacFormItem>
        <SacFormItem {...formItemLayout} label={upperCaseString('description')}>
          {getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: 'Please add description!'
              }
            ]
          })(<SacTextArea />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('service type')}
        >
          {getFieldDecorator('service_type', {
            rules: [
              {
                required: true,
                message: 'Please add service type!'
              }
            ]
          })(<SacCheckboxGroup options={serviceTypeOptions} />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('who can join')}
        >
          {getFieldDecorator('who_can_join', {
            rules: [
              {
                required: true,
                message: 'Please add who can join!'
              }
            ]
          })(<SacCheckboxGroup options={whoCanJoinOptions} />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('Organizations email')}
        >
          {getFieldDecorator('org_email', {
            rules: [
              {
                required: true,
                message: 'Please add organizations email!'
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('confirm email')}
        >
          {getFieldDecorator('confirm_org_email', {
            rules: [
              {
                required: true,
                message: 'Please confirm your organizations email!'
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
        <SacFormItem {...formItemLayout} label={upperCaseString('url')}>
          {getFieldDecorator('org_url', {
            rules: [
              {
                required: true,
                message: 'Please confirm your organizations email!'
              }
            ]
          })(
            <SacInput
              suffix={
                <Tooltip title='Extra information'>
                  <Icon
                    type='question-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
            />
          )}
        </SacFormItem>
      </SacForm>
    );
  }
}

export const OrganizationAccountDetailForm = SacForm.create({
  name: 'organization_detail'
})(OrganizationAccountDetail);

import React, { Component, Fragment } from 'react';

import { Divider, Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';

import { upperCaseString } from 'commons/utils';
import { actionButton } from 'commons/utils/defaultCssVariables';

class SelectOrganization extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <p style={{ textAlign: 'left', fontSize: '16px' }}>
          {upperCaseString('Select your organization')}
        </p>
        <Divider />
        <SacForm layout='vertical'>
          <SacFormItem label={upperCaseString('Find your organization')}>
            <SacRow type='flex' justify='start' align='bottom'>
              <SacCol xs={16}>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(
                  <SacInput
                    placeholder={upperCaseString('Search')}
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
              </SacCol>
              <SacCol xs={8}>
                <SacButton
                  style={{ width: '80%', float: 'right', ...actionButton }}
                >
                  Search
                </SacButton>
              </SacCol>
            </SacRow>
          </SacFormItem>
        </SacForm>
      </Fragment>
    );
  }
}

export const SelectOrganizationForm = SacForm.create({
  name: 'select_organization'
})(SelectOrganization);

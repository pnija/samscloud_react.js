import React, { Component } from 'react';

import { Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacCheckbox } from 'components/SacCheckbox';
import { SacText } from 'components/SacText';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';

import {
  formItemLayout,
  actionButton
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

class ProCode extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <SacForm
        style={{ marginTop: '40px', color: '#525a65' }}
        layout='horizontal'
        title={
          <SacText style={{ color: '#525a65' }}>
            {upperCaseString('pro-code')}
          </SacText>
        }
        divider
        edit
      >
        <SacFormItem {...formItemLayout} label={upperCaseString('custom code')}>
          {getFieldDecorator('org_url', {
            rules: []
          })(<SacCheckbox />)}
        </SacFormItem>
        <SacFormItem
          {...formItemLayout}
          label={upperCaseString('enter your custom code')}
        >
          {getFieldDecorator('custom_code', {
            rules: [
              {
                required: true,
                message: 'Please enter your custom code!'
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
        <SacFormItem>
          {getFieldDecorator('custom_code', {
            rules: [
              {
                required: true,
                message: 'Please enter your custom code!'
              }
            ]
          })(
            <SacRow>
              <SacCol xs={20} xxl={{ span: 13, offset: 8 }}>
                <SacText>
                  This is the code you will share with users to subscribe to
                  your organization. Exmp: CYCOUGS1
                </SacText>
                <br />
                <SacText>
                  * Dont need a custom code we’ll generate one and send when
                  were done here.
                </SacText>
              </SacCol>
              <SacCol xs={4} xxl={{ span: 3 }}>
                <SacButton style={{ float: 'right', ...actionButton }}>
                  Check
                </SacButton>
              </SacCol>
            </SacRow>
          )}
        </SacFormItem>
      </SacForm>
    );
  }
}

export const ProCodeForm = SacForm.create({
  name: 'procode'
})(ProCode);

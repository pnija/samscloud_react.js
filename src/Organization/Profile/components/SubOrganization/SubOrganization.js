import React, { Component, Fragment } from 'react';

import { Tooltip, Icon } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacCheckbox } from 'components/SacCheckbox';
import { SacParagraph } from 'components/SacParagraph';
import { SacText } from 'components/SacText';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';

import { actionButton } from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';
import { SacFormItem } from 'components/SacFormItem';

class SubOrganization extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <SacForm
          style={{ marginTop: '20px' }}
          title={
            <SacCheckbox
              style={{
                display: 'flex',
                fontSize: '18px',
                alignContent: 'center',
                alignItems: 'middle',
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
                padding: 0
              }}
            >
              {
                <SacText style={{ color: '#525a65' }}>
                  {upperCaseString('Is this a sub-organization?')}
                </SacText>
              }
            </SacCheckbox>
          }
          divider
        >
          <SacFormItem label={upperCaseString('FIND YOUR PARENT ORGANIZATION')}>
            <SacRow type='flex' justify='start' align='bottom'>
              <SacCol xs={16}>
                {getFieldDecorator('username', {
                  rules: []
                })(
                  <SacInput
                    placeholder={upperCaseString(
                      'SEARCH BY NAME ARE ENTER PROCODE'
                    )}
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
        <SacParagraph style={{ marginTop: '40px' }}>
          {upperCaseString(`Add <Search Results> as a parent organization `)}
        </SacParagraph>
      </Fragment>
    );
  }
}

export const SubOrganizationForm = SacForm.create({
  name: 'sub_organization'
})(SubOrganization);

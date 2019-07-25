import React, { Component } from 'react';

import { Avatar } from 'antd';

import { SacForm } from 'components/SacForm';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacTitle } from 'components/SacTitle';
import { SacRadio } from 'components/SacRadio';

import { SacSidebarScreen } from 'components/SacSidebarScreen';

import { OrganizationAccountDetailForm } from './components/OrganizationAccountDetail';
import { ProCodeForm } from './components/ProCode';
import { ContactForm } from './components/Contact';
import { ChangePasswordForm } from './components/ChangePassword';
import { SubOrganizationForm } from './components/SubOrganization';

import {
  defaultTitleOrganizationStyle,
  actionButton,
  disabledActionButton,
  marginActionButton
} from 'commons/utils/defaultCssVariables';

import './organizationProfile.scss';
import { SacButton } from 'components/SacButton';
import { upperCaseString } from 'commons/utils';

class OrganizationProfile extends Component {
  moveToOrganizationAddress = () => {
    this.props.history.push('/organization/address');
  };
  render() {
    return (
      <SacSidebarScreen>
        <SacRow
          gutter={16}
          style={{ backgroundColor: '#fff', padding: '30px' }}
        >
          <SacCol xs={24} xxl={6} xl={8} lg={10}>
            <SacTitle
              style={{
                marginLeft: '20px',
                ...defaultTitleOrganizationStyle
              }}
              level={3}
            >
              Add your Orgnizations Details
            </SacTitle>
          </SacCol>
          <SacCol xs={24} xxl={18} xl={16} lg={14}>
            <SacRadio.Group buttonStyle='solid' defaultValue='account'>
              <SacRadio.Button
                value='account'
                style={{
                  marginLeft: '20px',
                  width: 234,
                  border: 'none'
                }}
              >
                1. Account
              </SacRadio.Button>
              <SacRadio.Button
                value='address'
                style={{
                  marginLeft: '20px',
                  width: 234,
                  border: 'none'
                }}
                onClick={this.moveToOrganizationAddress}
              >
                2. Address
              </SacRadio.Button>
              <SacRadio.Button
                value='finish'
                style={{
                  marginLeft: '20px',
                  width: 234,
                  border: 'none'
                }}
              >
                3. Finish
              </SacRadio.Button>
            </SacRadio.Group>
          </SacCol>
        </SacRow>
        <SacRow
          gutter={16}
          type='flex'
          justify='space-between'
          style={{ backgroundColor: '#fff' }}
        >
          <SacCol
            style={{ marginTop: '80px' }}
            push={2}
            xs={24}
            xxl={11}
            xl={12}
            lg={20}
          >
            <SacRow>
              <SacCol xs={24} xxl={20} xl={20} lg={20}>
                <SacTitle level={3}>Account Information</SacTitle>
              </SacCol>
              <SacCol
                style={{ textAlign: 'center' }}
                xs={24}
                xxl={4}
                xl={4}
                lg={4}
              >
                <Avatar size={64} icon='user' />
                <SacButton type='link'>{upperCaseString('Add logo')}</SacButton>
              </SacCol>
            </SacRow>
          </SacCol>
        </SacRow>
        <SacRow
          gutter={16}
          style={{ backgroundColor: '#fff', paddingBottom: 30 }}
        >
          <SacCol push={2} xs={24} xxl={11} xl={11} lg={20}>
            <SubOrganizationForm />
            <OrganizationAccountDetailForm />
            <ProCodeForm />
            <ContactForm />
            <ChangePasswordForm />
          </SacCol>
          <SacCol xs={24}>
            <SacButton
              style={{
                marginRight: '60px',
                ...marginActionButton,
                ...actionButton
              }}
            >
              Cancel
            </SacButton>
            <SacButton style={{ ...marginActionButton, ...actionButton }}>
              Finish
            </SacButton>
            <SacButton style={{ ...marginActionButton, ...actionButton }}>
              Next
            </SacButton>
            <SacButton
              disabled
              style={{
                ...marginActionButton,
                ...disabledActionButton
              }}
            >
              Previous
            </SacButton>
          </SacCol>
        </SacRow>
      </SacSidebarScreen>
    );
  }
}

export const OrganizationProfileForm = SacForm.create({
  name: 'organization_profile'
})(OrganizationProfile);

import React, { Component, Fragment } from 'react';

import { Avatar } from 'antd';

import { FloorsForm } from './components/Floors';
import { NameAddLogo } from './components/NameAddLogo';
import { GeoFenceForm } from './components/GeoFence';
import { AddressForm } from './components/Address/Address';

import { SacButton } from 'components/SacButton';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';

import {
  primaryColor,
  avatarIconAddress,
  actionButton,
  organizationAddressCard
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';
import zone from 'assets/images/zone.svg';

const { Meta } = SacCard;

export default class CardLeft extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            width: '369px',
            height: '580px',
            opacity: 0.95,
            marginTop: '10px',
            marginLeft: 5,
            float: 'left',
            padding: '8px',
            overflowY: 'scroll',
            backgroundColor: '#fff'
          }}
        >
          <NameAddLogo />
          <AddressForm />
          <GeoFenceForm />
          <FloorsForm />

          <SacCard
            style={{ marginTop: '10px', ...organizationAddressCard }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              style={{ textAlign: 'left', marginBottom: 0 }}
              avatar={
                <Avatar
                  style={{ ...avatarIconAddress }}
                  size='small'
                  src={zone}
                  shape='square'
                />
              }
              title={
                <SacText
                  style={{ marginBottom: 0, color: '#000', width: 63 }}
                  level={4}
                >
                  {upperCaseString('zones')}
                  <SacButton
                    style={{
                      float: 'right',
                      color: primaryColor,
                      height: 32,
                      width: 63
                    }}
                  >
                    Edit
                  </SacButton>
                </SacText>
              }
              description={
                <SacText
                  style={{
                    color: '#0371d2',
                    fontWeight: 'bold'
                  }}
                >
                  25 actives
                </SacText>
              }
            />
          </SacCard>
          <SacButton style={{ float: 'right', ...actionButton, marginTop: 20 }}>
            Next
          </SacButton>
        </div>
      </Fragment>
    );
  }
}

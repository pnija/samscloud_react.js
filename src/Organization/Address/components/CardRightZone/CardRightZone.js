import React, { Component, Fragment } from 'react';

import { Avatar } from 'antd';

import { SacButton } from 'components/SacButton';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';
import { SacParagraph } from 'components/SacParagraph';
import { SacTitle } from 'components/SacTitle';
import { CardZoneItemForm } from './components/CardZoneItem';

import {
  primaryColor,
  avatarIconAddress,
  organizationAddressCard,
  organizationZoneAddressCard
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';

import zone from 'assets/images/zone.svg';
import lock from 'assets/images/lock.svg';

const { Meta } = SacCard;

export default class CardRightZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandZone: false
    };
  }
  switchZone = () => {
    this.setState({
      expandZone: !this.state.expandZone
    });
    console.log('this.state.expandZone', this.state.expandZone);
  };
  render() {
    return (
      <Fragment>
        <SacCard
          style={{
            width: '420px',
            height: '530px',
            backgroundColor: 'rgba(256,256,256,0)',
            border: 'none',
            float: 'right',
            right: 25
          }}
          bodyStyle={{ padding: '8px' }}
        >
          <SacCard
            style={{ width: 420, ...organizationAddressCard }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              style={{
                textAlign: 'left',
                marginBottom: 0,
                width: '100%',
                margin: 0
              }}
              avatar={
                <Avatar
                  style={{
                    ...avatarIconAddress
                  }}
                  size='small'
                  src={zone}
                  shape='square'
                />
              }
              title={
                <SacText style={{ marginBottom: 0, color: '#000' }} level={4}>
                  {upperCaseString('zones')}
                  <SacButton style={{ float: 'right', color: primaryColor }}>
                    Save
                  </SacButton>
                </SacText>
              }
              description={
                <SacParagraph style={{ fontSize: 11 }}>
                  Adjust slider to create +/- zones for your organization
                </SacParagraph>
              }
            />
          </SacCard>
          <SacCard
            bordered={false}
            style={{
              width: this.state.expandZone ? '690px' : '420px',
              right: this.state.expandZone ? '270px' : 0,
              ...organizationZoneAddressCard
            }}
            title={
              <SacTitle
                style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                level={4}
              >
                25 - {upperCaseString('zones')}
                <SacButton
                  type='link'
                  onClick={this.switchZone}
                  style={{ float: 'right' }}
                >
                  <Avatar
                    style={{
                      color: primaryColor,
                      fontSize: 24
                    }}
                    src={lock}
                    theme='filled'
                  />
                </SacButton>
              </SacTitle>
            }
            bodyStyle={{
              padding: '15px 10px',
              backgroundColor: '#fff',
              height: 480,
              overflowX: 'hidden',
              overflowY: 'scroll'
            }}
          >
            <CardZoneItemForm
              zoneName='Zone 1'
              floorName='Floor 1'
              expandZone={this.state.expandZone}
            />
            <CardZoneItemForm
              zoneName='Zone 2'
              floorName='Floor 2'
              expandZone={this.state.expandZone}
            />
            <CardZoneItemForm
              zoneName='Zone 3'
              floorName='Floor 3'
              expandZone={this.state.expandZone}
            />
            <CardZoneItemForm
              zoneName='Zone 4'
              floorName='Floor 4'
              expandZone={this.state.expandZone}
            />
            <CardZoneItemForm
              zoneName='Zone 5'
              floorName='Floor 5'
              expandZone={this.state.expandZone}
            />
            <CardZoneItemForm
              zoneName='Zone 6'
              floorName='Floor 6'
              expandZone={this.state.expandZone}
            />
          </SacCard>
        </SacCard>
      </Fragment>
    );
  }
}

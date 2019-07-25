import React, { Component } from 'react';

import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';

import { SacSidebarScreen } from 'components/SacSidebarScreen';
import { SacForm } from 'components/SacForm';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacRadio } from 'components/SacRadio';
import { SacTitle } from 'components/SacTitle';

import { CardLeft } from './components/CardLeft';
import { CardRightZone } from './components/CardRightZone';
import { ZoneBottom } from './components/ZoneBottom';

import { defaultTitleOrganizationStyle } from 'commons/utils/defaultCssVariables';

class OrganizationAddress extends Component {
  constructor(props) {
    super(props);
    this.polygonRef = React.createRef();
    this.state = {
      positions: []
    };
  }
  setPolygonOptions = options => {
    this.polygonRef.current.polygon.setOptions(options);
  };

  moveToOrganizationProfile = () => {
    this.props.history.push('/organization/profile');
  };

  onMapClicked = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    let positionTemp = this.state.positions;
    positionTemp.push({ lat, lng });
    this.setState({
      positions: positionTemp
    });
    this.setPolygonOptions({ paths: this.state.positions });
  };
  render() {
    return (
      <SacSidebarScreen>
        <SacRow
          gutter={16}
          style={{ backgroundColor: '#fff', padding: '30px' }}
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
                ...defaultTitleOrganizationStyle
              }}
              level={3}
            >
              Add your Orgnizations Details
            </SacTitle>
          </SacCol>
          <SacCol xs={24} xxl={18} xl={16} lg={14}>
            <SacRadio.Group buttonStyle='solid' defaultValue='address'>
              <SacRadio.Button
                value='account'
                style={{
                  marginLeft: '20px',
                  width: 234,
                  border: 'none'
                }}
                onClick={this.moveToOrganizationProfile}
              >
                1. Account
              </SacRadio.Button>
              <SacRadio.Button
                value='address'
                style={{
                  width: 234,
                  marginLeft: '20px',
                  border: 'none'
                }}
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
        <SacRow gutter={16}>
          <SacCol span={24}>
            <Map
              initialCenter={{
                lat: 10.751414534490518,
                lng: 106.71300656540761
              }}
              className={'map'}
              style={{ width: '100%', height: '800px' }}
              google={this.props.google}
              zoom={18}
              onClick={this.onMapClicked}
            >
              <CardLeft />
              <CardRightZone />
              <Polygon
                ref={this.polygonRef}
                paths={this.state.positions}
                strokeColor='#0000FF'
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor='#0000FF'
                fillOpacity={0.35}
              />
            </Map>
            <ZoneBottom />
          </SacCol>
        </SacRow>
      </SacSidebarScreen>
    );
  }
}

export const OrganizationAddressForm = SacForm.create({
  name: 'organization_address'
})(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
  })(OrganizationAddress)
);

import React, { Component, Fragment } from 'react';

import { Map, Polygon, GoogleApiWrapper } from 'google-maps-react';
import { Avatar, Dropdown, Menu, Icon, Tooltip } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacParagraph } from 'components/SacParagraph';

import {
  avatarIconAddress,
  errorColorCode,
  actionButton
} from 'commons/utils/defaultCssVariables';

import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacSelect } from 'components/SacSelect';

import zone from 'assets/images/zone.svg';
import room from 'assets/images/room.svg';
import camera from 'assets/images/camera.svg';
import upload from 'assets/images/upload.svg';
import document from 'assets/images/document.svg';
import addButton from 'assets/images/addButton.svg';
import imageCamera from 'assets/images/imageCamera.png';

import './cardZoneItem.scss';

const { Meta } = SacCard;
const { Option } = SacSelect;

class CardZoneItem extends Component {
  constructor(props) {
    super(props);
    this.polygonRef = React.createRef();
    this.state = {
      editZoneItem: false,
      editRoom: true,
      addCamera: true,
      positions: [],
      uploadButton: true
    };
  }
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
  addCameraHandler = () => {
    this.setState({
      addCamera: !this.state.addCamera
    });
  };
  uploadDocument = () => {
    this.setState({
      uploadButton: !this.state.uploadButton
    });
  };
  editZoneItemCard = () => {
    this.setState({
      editZoneItem: !this.state.editZoneItem
    });
  };
  editZoneName = () => {
    this.setState({
      editRoom: !this.state.editRoom
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i}>
          <Tooltip
            overlayStyle={{
              height: 180,
              width: 320,
              zIndex: 1066,
              marginLeft: 120
            }}
            placement='right'
            title={
              <SacCard
                style={{
                  height: 180,
                  width: 320,
                  paddingRight: 10,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundImage: `url("${imageCamera}")`
                }}
              >
                <SacButton
                  style={{
                    width: 63,
                    height: 32,
                    marginTop: 100,
                    marginLeft: 60,
                    float: 'right'
                  }}
                >
                  Add
                </SacButton>
              </SacCard>
            }
          >
            <SacParagraph style={{ marginBottom: 0 }}>{'Cam' + i}</SacParagraph>
          </Tooltip>
        </Option>
      );
    }
    const menu = (
      <Menu style={{ width: 200 }}>
        <Menu.Item style={{ height: 40 }}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.alipay.com/'
          >
            Floor 1
          </a>
        </Menu.Item>
        <Menu.Item style={{ height: 40 }}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.taobao.com/'
          >
            Floor 2
          </a>
        </Menu.Item>
        <Menu.Item style={{ height: 40 }}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.tmall.com/'
          >
            Floor 3
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <SacRow
        gutter={24}
        style={{
          padding: this.props.expandZone ? '20px 10px' : '10px',
          marginBottom: 10,
          boxShadow: this.props.expandZone
            ? '0 2px 3px 0 rgba(0, 0, 0, 0.16), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
            : 'none'
        }}
      >
        <SacCol span={this.props.expandZone ? 16 : 24}>
          <Meta
            style={{ textAlign: 'left', marginBottom: 0 }}
            avatar={
              <Avatar
                style={{
                  marginLeft: 20,
                  ...avatarIconAddress
                }}
                size={36}
                src={zone}
                shape='square'
              />
            }
            title={
              <SacText style={{ marginBottom: 0, color: '#1589ee' }} level={4}>
                {this.props.zoneName}
                {this.props.expandZone && (
                  <SacButton
                    onClick={this.editZoneItemCard}
                    style={{ float: 'right', color: '#1589ee', zIndex: 100 }}
                  >
                    Edit
                  </SacButton>
                )}
              </SacText>
            }
            description={
              <SacParagraph style={{ marginTop: -10 }}>
                Lat 34.945790 | Long -78.598837{' '}
              </SacParagraph>
            }
          />
        </SacCol>
        <SacCol span={this.props.expandZone ? 8 : 0}>
          <Meta
            avatar={
              <Dropdown
                overlay={menu}
                style={{ zIndex: 100, width: 200 }}
                placement='bottomLeft'
              >
                <SacButton style={{ zIndex: 100 }} icon='caret-down' />
              </Dropdown>
            }
            title={
              <SacText style={{ marginBottom: 0, color: '#1589ee' }} level={4}>
                {this.props.floorName}
              </SacText>
            }
            description={
              <SacParagraph style={{ marginTop: -10 }}>
                Altitude 37m
              </SacParagraph>
            }
          />
        </SacCol>

        {this.state.editZoneItem && this.props.expandZone && (
          <SacCol
            span={24}
            style={{
              height: 320,
              marginTop: 10,
              zIndex: 1036,
              overflowX: 'hidden',
              overflowY: 'scroll'
            }}
          >
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
            <SacRow>
              <SacCol span={14}>
                <div
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    minHeight: 320,
                    width: 380,
                    padding: '15px 10px',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      opacity: 0.6,
                      backgroundColor: '#fff',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: '0px',
                      left: '0px'
                    }}
                  />
                  <SacCard
                    style={{
                      width: '100%',
                      height: 70,
                      position: 'relative',
                      marginBottom: 5,
                      border: 'none',
                      boxShadow:
                        '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.4)'
                    }}
                    bodyStyle={{ padding: 20, borderRadius: 4 }}
                  >
                    <Meta
                      avatar={
                        <Avatar
                          style={{
                            ...avatarIconAddress,
                            backgroundColor: '#fff'
                          }}
                          size={42}
                          src={room}
                          shape='square'
                        />
                      }
                      description={
                        <SacForm
                          layout='inline'
                          style={{
                            width: '100%'
                          }}
                        >
                          <SacFormItem style={{ marginRight: 0 }}>
                            {getFieldDecorator('state', {
                              rules: []
                            })(
                              <Fragment>
                                {this.state.editRoom ? (
                                  <SacText style={{ color: '#2b2826' }}>
                                    Boys Locker Room
                                  </SacText>
                                ) : (
                                  <SacInput
                                    placeholder='Name this zone'
                                    style={{ zIndex: 100 }}
                                  />
                                )}
                              </Fragment>
                            )}
                          </SacFormItem>
                          <SacFormItem
                            style={{ float: 'right', marginRight: 0 }}
                          >
                            <SacButton
                              onClick={this.editZoneName}
                              style={{
                                float: 'right',
                                color: '#1589ee',
                                width: 70,
                                zIndex: 100
                              }}
                            >
                              {this.state.editRoom ? 'Edit' : 'Save'}
                            </SacButton>
                          </SacFormItem>
                        </SacForm>
                      }
                    />
                  </SacCard>
                  <SacCard
                    style={{
                      width: '100%',
                      height: 70,
                      position: 'relative',
                      marginBottom: 5,
                      border: 'none',
                      boxShadow:
                        '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.4)'
                    }}
                    bodyStyle={{ padding: 20, borderRadius: 4 }}
                  >
                    <Meta
                      avatar={
                        <Avatar
                          style={{
                            ...avatarIconAddress,
                            backgroundColor: '#fff'
                          }}
                          size={42}
                          src={camera}
                          shape='square'
                        />
                      }
                      description={
                        <Fragment>
                          <SacText style={{ color: '#2b2826' }}>
                            {this.state.addCamera ? (
                              'Add CCTV Streams'
                            ) : (
                              <Fragment>
                                CCTV Cameras (
                                <SacText style={{ color: '#1589ee' }}>
                                  3
                                </SacText>
                                )
                              </Fragment>
                            )}
                          </SacText>
                          {this.state.addCamera ? (
                            <SacButton
                              onClick={this.addCameraHandler}
                              shape='circle'
                              style={{
                                float: 'right',
                                zIndex: 100,
                                padding: 0,
                                border: 'none'
                              }}
                            >
                              <Avatar
                                style={{ height: 40, width: 40 }}
                                src={addButton}
                              />
                            </SacButton>
                          ) : (
                            <SacButton
                              onClick={
                                this.state.edit
                                  ? this.editZoneName
                                  : this.saveZoneName
                              }
                              style={{
                                float: 'right',
                                color: '#1589ee',
                                width: 70,
                                zIndex: 100
                              }}
                            >
                              {this.state.editCCTV ? 'Edit' : 'Save'}
                            </SacButton>
                          )}
                        </Fragment>
                      }
                    />
                  </SacCard>
                  {!this.state.addCamera && (
                    <SacSelect
                      className='card-zone-item-wrapper'
                      mode='multiple'
                      style={{
                        width: '100%',
                        zIndex: 100,
                        position: 'relative',
                        marginBottom: 10
                      }}
                      placeholder='Please select'
                      defaultValue={['a10', 'c12']}
                      onChange={this.handleChange}
                      suffixIcon={<Icon type='caret-down' theme='filled' />}
                    >
                      {children}
                    </SacSelect>
                  )}

                  <SacCard
                    style={{
                      width: '100%',
                      height: 70,
                      position: 'relative',
                      marginBottom: 5,
                      border: 'none',
                      boxShadow:
                        '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.4)'
                    }}
                    bodyStyle={{ padding: 20, borderRadius: 4 }}
                  >
                    <Meta
                      avatar={
                        <Avatar
                          style={{
                            ...avatarIconAddress,
                            backgroundColor: '#fff'
                          }}
                          size={42}
                          src={document}
                          shape='square'
                        />
                      }
                      description={
                        <Fragment>
                          <SacText style={{ color: '#2b2826' }}>
                            Add Documents
                          </SacText>
                          {this.state.uploadButton ? (
                            <SacButton
                              onClick={this.uploadDocument}
                              shape='circle'
                              style={{
                                float: 'right',
                                zIndex: 100,
                                height: 40,
                                width: 40
                              }}
                            >
                              <Avatar src={upload} />
                            </SacButton>
                          ) : (
                            <SacButton
                              onClick={
                                this.state.edit
                                  ? this.editZoneName
                                  : this.saveZoneName
                              }
                              style={{
                                float: 'right',
                                color: '#1589ee',
                                width: 70,
                                zIndex: 100
                              }}
                            >
                              {this.state.edit ? 'Edit' : 'Save'}
                            </SacButton>
                          )}
                        </Fragment>
                      }
                    />
                  </SacCard>
                  {!this.state.uploadButton && (
                    <SacCard style={{ position: 'relative' }}>
                      <Meta
                        description={
                          <SacForm>
                            <SacFormItem label='NAME: <Fireroute.pdf>'>
                              {getFieldDecorator('state', {
                                rules: []
                              })(
                                <SacInput
                                  placeholder='Fire Escape Route floor 2 north west '
                                  style={{ zIndex: 100 }}
                                />
                              )}
                            </SacFormItem>
                            <SacFormItem>
                              {getFieldDecorator('state', {
                                rules: []
                              })(
                                <Fragment>
                                  <SacButton
                                    style={{
                                      backgroundColor: '#043491',
                                      color: '#fff',
                                      zIndex: 100,
                                      float: 'right',
                                      marginLeft: 10
                                    }}
                                  >
                                    Delete
                                  </SacButton>
                                  <SacButton
                                    style={{
                                      zIndex: 100,
                                      backgroundColor: '#d0021b',
                                      color: '#fff',
                                      float: 'right'
                                    }}
                                  >
                                    Update
                                  </SacButton>
                                </Fragment>
                              )}
                            </SacFormItem>
                          </SacForm>
                        }
                      />
                    </SacCard>
                  )}

                  <SacButton
                    style={{
                      float: 'right',
                      marginTop: 15,
                      ...actionButton,
                      position: 'relative'
                    }}
                  >
                    Done
                  </SacButton>
                </div>
              </SacCol>
            </SacRow>
          </SacCol>
        )}
        {this.state.editZoneItem && this.props.expandZone && (
          <SacCol style={{ height: 50 }}>
            <SacRow>
              <SacCol span={20}>
                <SacText style={{ color: errorColorCode }}>
                  Note: Functions and assets saved to zones will be saved to
                  lat/long coordinates of the zone, this will automatically
                  update if zones are changed.
                </SacText>
              </SacCol>
              <SacCol span={4}>
                <SacButton style={{ ...actionButton }}>Update</SacButton>
              </SacCol>
            </SacRow>
          </SacCol>
        )}
      </SacRow>
    );
  }
}

export const CardZoneItemForm = SacForm.create({
  name: 'cardzoneitem'
})(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
  })(CardZoneItem)
);

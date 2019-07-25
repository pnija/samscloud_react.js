import React, { Component, Fragment } from 'react';

import { Icon, Switch, Tooltip, Avatar } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacParagraph } from 'components/SacParagraph';

import { upperCaseString } from 'commons/utils';
import {
  actionButton,
  avatarIconAddress,
  primaryColor,
  organizationAddressCard
} from 'commons/utils/defaultCssVariables';

import './geofence.scss';

import mark from 'assets/images/markGeo.svg';

const { Meta } = SacCard;

class GeoFence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIcon: true,
      edit: false,
      update: true,
      switch: false
    };
  }
  handleEditClick = () => {
    this.setState({
      editIcon: false,
      edit: true
    });
  };

  handleSaveClick = () => {
    this.setState({
      switch: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <SacCard
          className='geo-fence-card'
          style={{ marginTop: '10px', ...organizationAddressCard }}
          bodyStyle={{ padding: '15px 10px' }}
        >
          <Meta
            style={{ textAlign: 'left', marginBottom: 0 }}
            avatar={
              <Avatar
                style={{
                  paddingTop: 0,
                  ...avatarIconAddress
                }}
                size='small'
                src={mark}
                shape='square'
              />
            }
            title={
              <SacText style={{ marginBottom: 0, color: '#000' }} level={4}>
                {upperCaseString('geo-fence')}
                {this.props.cancel && (
                  <SacButton style={{ float: 'right', color: primaryColor }}>
                    Cancel
                  </SacButton>
                )}
                {this.state.editIcon && (
                  <SacButton
                    onClick={this.handleEditClick}
                    shape='circle'
                    icon='edit'
                    style={{
                      color: '#000',
                      float: 'right',
                      border: '1px solid #000'
                    }}
                  />
                )}
              </SacText>
            }
            description={
              <SacParagraph
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 400,
                  marginTop: -5
                }}
              >
                <span style={{ fontFamily: 'OpenSans-Bold' }}>
                  Cy-Fair Grounds
                </span>
                {this.state.switch && (
                  <Switch style={{ float: 'right', marginRight: '20px' }} />
                )}
              </SacParagraph>
            }
          />
        </SacCard>
        {this.state.edit && (
          <SacCard
            className='card-geo-fence-edit'
            style={{
              minHeight: '134px',
              border: 'none',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
              marginBottom: '10px',
              marginTop: '-10px'
            }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              style={{ textAlign: 'left', marginBottom: 0 }}
              description={
                <Fragment>
                  <SacForm layout='vertical'>
                    <SacFormItem
                      label={
                        <Fragment>
                          <SacText style={{ color: '#a8acb2' }}>
                            {upperCaseString('name this geo-fence')}
                          </SacText>
                          <Switch style={{ float: 'right' }} />
                        </Fragment>
                      }
                    >
                      {getFieldDecorator('geo_fence', {
                        rules: []
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
                  {this.state.update ? (
                    <SacRow>
                      <SacCol span={18}>
                        <SacText style={{ color: '#d0021b' }}>
                          Your dispatch will receive incident notificaitons for
                          this Geo-Fence
                        </SacText>
                      </SacCol>
                      <SacCol span={6}>
                        <SacButton
                          onClick={this.handleSaveClick}
                          style={{ float: 'right', ...actionButton }}
                        >
                          Save
                        </SacButton>
                      </SacCol>
                    </SacRow>
                  ) : (
                    <SacRow>
                      <SacCol span={12}>
                        <SacText style={{ color: '#d0021b' }}>
                          Incident perimiter OFF you will not receive incident
                          notifications.
                        </SacText>
                      </SacCol>
                      <SacCol span={6}>
                        <SacButton
                          style={{
                            float: 'right',
                            backgroundColor: '#043491',
                            color: '#fff'
                          }}
                        >
                          Update
                        </SacButton>
                      </SacCol>
                      <SacCol span={6}>
                        <SacButton
                          style={{
                            float: 'right',
                            backgroundColor: '#d0021b',
                            color: '#fff'
                          }}
                        >
                          Delete
                        </SacButton>
                      </SacCol>
                    </SacRow>
                  )}
                </Fragment>
              }
            />
          </SacCard>
        )}
      </Fragment>
    );
  }
}

export const GeoFenceForm = SacForm.create({
  name: 'geofence'
})(GeoFence);

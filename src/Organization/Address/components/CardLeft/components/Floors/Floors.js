import React, { Component, Fragment } from 'react';

import { Icon, Switch, Tooltip, Avatar } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';
import { SacButton } from 'components/SacButton';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacInput } from 'components/SacInput';
import { SacTitle } from 'components/SacTitle';

import { upperCaseString } from 'commons/utils';
import {
  primaryColor,
  inactiveButton,
  organizationAddressCard,
  actionButton
} from 'commons/utils/defaultCssVariables';
import floors from 'assets/images/floors.svg';
import addButton from 'assets/images/addButton.svg';

import './floors.scss';
import { SacParagraph } from 'components/SacParagraph';

const { Meta } = SacCard;

class Floors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIcon: true,
      cancel: false,
      editFloors: false
    };
  }

  editFloors = () => {
    this.setState({
      editFloors: true,
      cancel: true,
      addIcon: !this.state.addIcon
    });
  };

  saveFloors = () => {
    this.setState({
      update: true,
      saveComplete: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <SacCard
          style={{ marginTop: '10px', ...organizationAddressCard }}
          bodyStyle={{ padding: '15px 10px' }}
        >
          <Meta
            style={{ textAlign: 'left', marginBottom: 0 }}
            avatar={
              <Avatar
                style={{
                  color: primaryColor,
                  fontSize: '24px',
                  backgroundColor: primaryColor
                }}
                size='small'
                src={floors}
                shape='square'
              />
            }
            title={
              <SacText style={{ marginBottom: 0, color: '#000' }} level={4}>
                {upperCaseString('Floors')}
                {this.state.cancel && (
                  <SacButton style={{ float: 'right', color: primaryColor }}>
                    Cancel
                  </SacButton>
                )}
                {this.state.addIcon && (
                  <Avatar
                    style={{
                      float: 'right',
                      cursor: 'pointer',
                      color: primaryColor
                    }}
                    onClick={this.editFloors}
                    size='large'
                    src={addButton}
                    shape='circle'
                  />
                )}
              </SacText>
            }
            description={
              this.state.completeEditFloor ? (
                <SacText style={{ color: '#000', fontWeight: 'bold' }}>
                  <strong style={{ color: '#0070d2' }}>4 Floors</strong>
                  {this.props.switch && (
                    <Switch style={{ float: 'right', marginRight: '20px' }} />
                  )}
                </SacText>
              ) : (
                <SacParagraph style={{ color: '#000', marginTop: -10 }}>
                  Lets add the floors of your building
                </SacParagraph>
              )
            }
          />
        </SacCard>
        {this.state.editFloors && (
          <SacCard
            className='floor-card'
            style={{
              minHeight: '134px',
              marginBottom: '10px',
              border: 'none',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
              marginTop: '-10px'
            }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              style={{ textAlign: 'left', marginBottom: 0 }}
              description={
                <Fragment>
                  <SacForm layout='vertical'>
                    <SacRow type='flex' align='middle'>
                      <SacCol span={18}>
                        {
                          <SacFormItem
                            label={
                              <Fragment>
                                <SacText style={{ color: '#a8acb2' }}>
                                  {upperCaseString(
                                    'enter the number of floors'
                                  )}
                                </SacText>
                              </Fragment>
                            }
                          >
                            {getFieldDecorator('geo_fence', {
                              rules: []
                            })(
                              <Fragment>
                                {this.state.update ? (
                                  <SacText
                                    style={{
                                      color: '#000',
                                      float: 'right',
                                      marginRight: 35
                                    }}
                                  >
                                    4
                                  </SacText>
                                ) : (
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
                              </Fragment>
                            )}
                          </SacFormItem>
                        }
                      </SacCol>
                      <SacCol span={6}>
                        {this.state.update ? (
                          <SacButton
                            onClick={this.saveFloors}
                            style={{
                              float: 'right',
                              color: '#fff',
                              backgroundColor: primaryColor
                            }}
                          >
                            Update
                          </SacButton>
                        ) : (
                          <SacButton
                            onClick={this.saveFloors}
                            style={{ float: 'right', ...actionButton }}
                          >
                            Save
                          </SacButton>
                        )}
                      </SacCol>
                    </SacRow>
                  </SacForm>
                  {this.state.saveComplete && (
                    <SacForm>
                      <SacRow
                        type='flex'
                        style={{
                          alignContent: 'middle',
                          justifyContent: 'space-between'
                        }}
                      >
                        <SacCol span={2}>
                          <Avatar
                            style={{
                              color: primaryColor,
                              fontSize: '24px',
                              backgroundColor: primaryColor
                            }}
                            size='small'
                            src={floors}
                            shape='square'
                          />
                        </SacCol>
                        <SacCol span={2}>
                          <SacTitle level={4}>1</SacTitle>
                        </SacCol>
                        <SacCol span={8}>
                          <SacFormItem>
                            {getFieldDecorator('altitude', {
                              rules: []
                            })(<SacInput />)}
                          </SacFormItem>
                        </SacCol>
                        <SacCol span={4}>
                          <Switch />
                        </SacCol>
                        <SacCol span={4}>
                          {this.state.updateItem ? (
                            <SacButton
                              style={{ float: 'right', color: primaryColor }}
                            >
                              Update
                            </SacButton>
                          ) : (
                            <SacButton
                              style={{ float: 'right', color: primaryColor }}
                            >
                              Save
                            </SacButton>
                          )}
                        </SacCol>
                      </SacRow>
                      <SacRow
                        type='flex'
                        style={{
                          alignContent: 'middle',
                          justifyContent: 'space-between'
                        }}
                      >
                        <SacCol span={2}>
                          <Avatar
                            style={{
                              color: primaryColor,
                              fontSize: '24px',
                              backgroundColor: primaryColor
                            }}
                            size='small'
                            src={floors}
                            shape='square'
                          />
                        </SacCol>
                        <SacCol span={2}>
                          <SacTitle level={4}>2</SacTitle>
                        </SacCol>
                        <SacCol span={8}>
                          <SacFormItem>
                            {getFieldDecorator('altitude', {
                              rules: []
                            })(<SacInput />)}
                          </SacFormItem>
                        </SacCol>
                        <SacCol span={4}>
                          <Switch />
                        </SacCol>
                        <SacCol span={4}>
                          <SacButton
                            style={{
                              float: 'right',
                              padding: '0 10px',
                              ...inactiveButton
                            }}
                          >
                            Inactive
                          </SacButton>
                        </SacCol>
                      </SacRow>
                    </SacForm>
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

export const FloorsForm = SacForm.create({
  name: 'floors'
})(Floors);

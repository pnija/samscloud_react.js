import React, { Component, Fragment } from 'react';

import { Icon, Tooltip, Avatar } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacForm } from 'components/SacForm';
import { SacFormItem } from 'components/SacFormItem';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';
import { SacInput } from 'components/SacInput';
import { SacButton } from 'components/SacButton';
import { SacParagraph } from 'components/SacParagraph';

import { upperCaseString } from 'commons/utils';
import {
  primaryColor,
  actionButton,
  errorColorCode,
  avatarIconAddress,
  organizationAddressCard
} from 'commons/utils/defaultCssVariables';
import avatar from 'assets/images/checkin.svg';
import { SacSelect } from 'components/SacSelect';

const { Meta } = SacCard;

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchListShow: false,
      addManuallyShow: false,
      addManuallyButtonShow: false,
      showAddressResult: true,
      addressListShow: false,
      edit: true,
      addressNotFound: false
    };
  }

  editButtonClick = () => {
    this.setState({
      searchListShow: true,
      addManuallyShow: false,
      addManuallyButtonShow: true,
      showAddressResult: false,
      addressListShow: true,
      edit: false,
      addressNotFound: false
    });
  };

  addManually = () => {
    this.setState({
      searchListShow: !this.state.searchListShow,
      addManuallyShow: !this.state.addManuallyShow,
      addressListShow: !this.state.addressListShow,
      addManuallyButtonShow: !this.state.addManuallyButtonShow,
      edit: false
    });
  };

  searchClick = () => {
    this.setState({
      addressNotFound: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <SacCard
          style={{
            ...organizationAddressCard,
            minHeight: '70px'
          }}
          bodyStyle={{
            padding: '5px 10px'
          }}
        >
          <Meta
            style={{ textAlign: 'left', marginBottom: 0, marginTop: '10px' }}
            avatar={
              <Avatar
                style={{
                  width: 26,
                  ...avatarIconAddress
                }}
                size='small'
                src={avatar}
                shape='square'
              />
            }
            title={
              <Fragment>
                {this.state.edit ? (
                  <SacText style={{ marginBottom: 0, color: '#000' }} level={4}>
                    {upperCaseString('address')}
                    <SacButton
                      onClick={this.editButtonClick}
                      style={{
                        float: 'right',
                        color: primaryColor,
                        width: 63,
                        height: 32
                      }}
                    >
                      Edit
                    </SacButton>
                  </SacText>
                ) : (
                  <SacText style={{ marginBottom: 0, color: '#000' }} level={4}>
                    {upperCaseString('address')}
                    <SacButton
                      onClick={this.searchClick}
                      style={{ float: 'right', color: primaryColor }}
                    >
                      Search
                    </SacButton>
                  </SacText>
                )}

                {this.state.addManuallyButtonShow ? (
                  <SacForm>
                    <SacFormItem style={{ marginTop: '15px' }}>
                      {getFieldDecorator('geo_fence', {
                        rules: []
                      })(
                        <SacInput
                          placeholder={upperCaseString('enter address')}
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
                ) : (
                  this.state.showAddressResult && (
                    <SacParagraph
                      style={{
                        marginTop: '10px',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}
                    >
                      <span
                        style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                      >
                        7789 Southwest Freeway Houston,
                      </span>
                      TX, USA
                    </SacParagraph>
                  )
                )}
                {this.state.addManuallyButtonShow && (
                  <SacButton
                    style={{
                      height: '20px',
                      float: 'right',
                      paddingRight: 0,
                      textAlign: 'right',
                      marginTop: '-5px',
                      fontSize: '12px'
                    }}
                    onClick={this.addManually}
                    type='link'
                  >
                    Add Manually
                  </SacButton>
                )}
              </Fragment>
            }
          />
        </SacCard>
        {this.state.addressListShow && (
          <SacCard
            style={{
              minHeight: '95px',
              marginTop: '-5px',
              border: 'none',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)'
            }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              description={
                <Fragment>
                  <SacRow style={{ marginBottom: '20px' }}>
                    <SacCol span={2}>
                      <Icon type='environment' theme='filled' />
                    </SacCol>
                    <SacCol span={22}>
                      <SacText>
                        <span
                          style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                        >
                          7789 Southwest Freeway
                        </span>{' '}
                        Houston,TX, USA{' '}
                      </SacText>
                    </SacCol>
                  </SacRow>
                  <SacRow style={{ marginBottom: '20px' }}>
                    <SacCol span={2}>
                      <Icon type='environment' theme='filled' />
                    </SacCol>
                    <SacCol span={22}>
                      <SacText>
                        <span
                          style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                        >
                          7789 Southwest Freeway
                        </span>{' '}
                        Houston,TX, USA{' '}
                      </SacText>
                    </SacCol>
                  </SacRow>
                  <SacRow style={{ marginBottom: '20px' }}>
                    <SacCol span={2}>
                      <Icon type='environment' theme='filled' />
                    </SacCol>
                    <SacCol span={22}>
                      <SacText>
                        <span
                          style={{ color: '#000', fontFamily: 'OpenSans-Bold' }}
                        >
                          7789 Southwest Freeway
                        </span>{' '}
                        Houston,TX, USA{' '}
                      </SacText>
                    </SacCol>
                  </SacRow>
                </Fragment>
              }
            />
          </SacCard>
        )}

        {this.state.addManuallyShow && (
          <SacCard
            style={{
              minHeight: '65px',
              marginTop: '-10px',
              border: 'none',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)'
            }}
            bodyStyle={{ padding: '15px 10px' }}
          >
            <Meta
              style={{ textAlign: 'left', marginBottom: 0 }}
              description={
                <Fragment>
                  {this.state.addressNotFound ? (
                    <SacText style={{ color: errorColorCode }}>
                      Address Not Found
                    </SacText>
                  ) : (
                    <SacForm>
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('street number')}
                            </SacText>
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
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('street name')}
                            </SacText>
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
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('city')}
                            </SacText>
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
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('state')}
                            </SacText>
                          </Fragment>
                        }
                      >
                        {getFieldDecorator('state', {
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
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('zip')}
                            </SacText>
                          </Fragment>
                        }
                      >
                        {getFieldDecorator('zip', {
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
                      <SacFormItem
                        style={{ margin: '5px 0' }}
                        label={
                          <Fragment>
                            <SacText style={{ color: '#a8acb2' }}>
                              {upperCaseString('country')}
                            </SacText>
                          </Fragment>
                        }
                      >
                        {getFieldDecorator('country', {
                          rules: []
                        })(
                          <SacSelect
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
                        <SacButton
                          style={{
                            float: 'right',
                            ...actionButton
                          }}
                        >
                          Save
                        </SacButton>
                      </SacFormItem>
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

export const AddressForm = SacForm.create({
  name: 'address'
})(Address);

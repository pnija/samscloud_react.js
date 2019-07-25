import React, { Component, Fragment } from 'react';
import { Avatar, Upload, Icon, message } from 'antd';

import { SacCard } from 'components/SacCard';
import { SacParagraph } from 'components/SacParagraph';
import { SacButton } from 'components/SacButton';

import { upperCaseString } from 'commons/utils';
import {
  primaryColor,
  actionButton,
  organizationAddressCard
} from 'commons/utils/defaultCssVariables';
import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import avatar from 'assets/images/checkin.svg';

const { Meta } = SacCard;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

export default class NameAddLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      editLogo: false
    };
  }

  editLogoClick = () => {
    this.setState({
      editLogo: !this.state.editLogo
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading && 'loading'} />
        <SacButton style={{ backgroundColor: primaryColor, color: '#fff' }}>
          Upload
        </SacButton>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Fragment>
        <SacCard
          style={{ ...organizationAddressCard }}
          bodyStyle={{ padding: '10px 10px' }}
        >
          <Meta
            style={{ textAlign: 'left', marginBottom: 0 }}
            avatar={
              this.state.editLogo ? (
                <Avatar
                  style={{
                    color: primaryColor,
                    marginTop: 18,
                    fontSize: '24px',
                    backgroundColor: primaryColor
                  }}
                  size='small'
                  src={avatar}
                  shape='square'
                />
              ) : (
                <SacRow style={{ display: 'flex', flexDirection: 'column' }}>
                  <Avatar
                    style={{
                      color: '#fff',
                      backgroundColor: primaryColor,
                      fontSize: '24px'
                    }}
                    size={36}
                    theme='filled'
                    icon='upload'
                    type='environment'
                  />
                  <SacButton
                    type='link'
                    style={{
                      fontSize: 9,
                      height: 20,
                      marginTop: 0,
                      paddingLeft: 5,
                      textAlign: 'center'
                    }}
                  >
                    {upperCaseString('Logo')}
                  </SacButton>
                </SacRow>
              )
            }
            title={
              <SacRow>
                <SacCol span={16}>
                  <SacParagraph
                    style={{
                      marginBottom: 0,
                      paddingTop: '15px',
                      color: '#000'
                    }}
                    level={4}
                  >
                    {this.state.editLogo ? (
                      upperCaseString('CY-FAIR HIGH SCHOOL')
                    ) : (
                      <span style={{ fontFamily: 'OpenSans-Bold' }}>
                        {upperCaseString('CY-FAIR HIGH SCHOOL')}
                      </span>
                    )}
                  </SacParagraph>
                </SacCol>
                <SacCol span={8}>
                  <SacButton
                    onClick={this.editLogoClick}
                    style={{
                      float: 'right',
                      width: 63,
                      height: 32,
                      marginTop: '8px',
                      color: primaryColor
                    }}
                  >
                    Edit
                  </SacButton>
                </SacCol>
              </SacRow>
            }
          />
        </SacCard>
        {this.state.editLogo && (
          <SacCard
            style={{
              height: '260px',
              boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              marginTop: -10,
              ...organizationAddressCard
            }}
            bodyStyle={{
              padding: 0
            }}
          >
            <SacRow>
              <SacCol
                style={{
                  display: 'flex',
                  paddingTop: 10,
                  flexDirection: 'column',
                  alignContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Upload
                  name='avatar'
                  style={{ width: 143, height: 143 }}
                  listType='picture-card'
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt='avatar' />
                  ) : (
                    uploadButton
                  )}
                </Upload>
                <SacParagraph>Upload Your Organizations Logo.</SacParagraph>
              </SacCol>
            </SacRow>

            <SacButton
              style={{ float: 'right', marginRight: '10px', ...actionButton }}
            >
              Save
            </SacButton>
          </SacCard>
        )}
      </Fragment>
    );
  }
}

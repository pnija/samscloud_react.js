import React, { Component } from 'react';
import { Layout } from 'antd';

import samscloud from 'assets/images/samscloud.svg';

const { Header } = Layout;

export default class SacHeader extends Component {
  render() {
    const { title, redirectHomePage } = this.props;

    return (
      <Layout theme='light'>
        <Header style={{ padding: '0 20px' }} className='header' title={title}>
          <img
            src={samscloud}
            alt=''
            style={{ float: 'left', marginTop: '10px' }}
            onClick={redirectHomePage}
          />
        </Header>
      </Layout>
    );
  }
}

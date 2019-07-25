import React, { Component } from 'react';

import { Layout, Icon } from 'antd';

import samscloudSquare from 'assets/images/samscloud-light.svg';

const { Header, Content, Footer, Sider } = Layout;

export default class SacSidebarScreen extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh', textAlign: 'left' }}>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div
            className='logo'
            style={{
              height: '32px',
              margin: '16px',
              textAlign: 'center'
            }}
          >
            {this.state.collapsed && <img alt='' src={samscloudSquare} />}
          </div>
        </Sider>
        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
          <Header
            style={{
              backgroundColor: '#f3f3f4',
              padding: 0,
              height: 61,
              textAlign: 'left',
              fontSize: '20px'
            }}
          >
            <Icon
              className='trigger'
              style={{ marginLeft: '16px' }}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content>
            <div
              style={{
                minHeight: 60
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'left' }}>
            Copyright Samscloud Ⓒ 2019
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

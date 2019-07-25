import React, { Component } from 'react';

import { defaultTitleStyle } from 'commons/utils/defaultCssVariables';
import { Typography } from 'antd';

const { Title } = Typography;

export default class SacTitle extends Component {
  render() {
    return (
      <Title style={{ ...defaultTitleStyle }} {...this.props}>
        {this.props.children}
      </Title>
    );
  }
}

import React, { Component, Fragment } from 'react';
import { SacHeader } from '../SacHeader/index';

import { spacingBottom } from 'commons/utils/defaultCssVariables';

export default class SacDefaultScreen extends Component {
  redirectHomePage = () => {
    this.props.history.push('/');
  };
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <SacHeader
          redirectHomePage={this.redirectHomePage}
          style={{ marginBottom: spacingBottom }}
        />
        {children}
      </Fragment>
    );
  }
}

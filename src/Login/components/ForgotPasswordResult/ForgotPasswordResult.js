import React, { Component, Fragment } from 'react';

import { SacModal } from 'components/SacModal';
import { SacButton } from 'components/SacButton';
import { SacTitle } from 'components/SacTitle';
import { SacText } from 'components/SacText';

import { upperCaseString } from 'commons/utils';
import { errorColorCode } from 'commons/utils/defaultCssVariables';

export default class ForgotPasswordResult extends Component {
  renderContentModal(state) {
    if (state === 'error') {
      return (
        <Fragment>
          <SacTitle style={{ color: errorColorCode }} level={4}>
            Your email address was not recognized.
          </SacTitle>
          <SacText style={{ color: errorColorCode }}>
            There is no account associated with the email address you entered.
          </SacText>
          <SacButton type='link' style={{ padding: 0 }}>
            Re - Enter your email.
          </SacButton>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <SacTitle level={4}>
            We emailed you instruction to reset your password.
          </SacTitle>
        </Fragment>
      );
    }
  }
  render() {
    const { visible, handleClose, state } = this.props;
    const title = state === 'error' ? 'ERROR' : 'MESSAGE SENT';
    const backgroundColor = state === 'error' ? errorColorCode : 'white';
    const textColor = state === 'error' ? 'white' : 'black';
    return (
      <SacModal
        title={
          <SacText style={{ color: textColor }}>
            {upperCaseString(title)}
          </SacText>
        }
        visible={visible}
        footer={[
          <SacButton
            style={{ backgroundColor: backgroundColor, color: textColor }}
            key='back'
            onClick={handleClose}
          >
            Close
          </SacButton>
        ]}
      >
        {this.renderContentModal(state)}
      </SacModal>
    );
  }
}

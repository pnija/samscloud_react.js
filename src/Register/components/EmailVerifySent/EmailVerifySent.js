import React, { Component } from 'react';

import { SacButton } from 'components/SacButton';
import { SacModal } from 'components/SacModal';

import {
  actionButton,
  defaultTitleStyle
} from 'commons/utils/defaultCssVariables';
import { upperCaseString } from 'commons/utils';
import { SacTitle } from 'components/SacTitle';

export default class EmailVerifySent extends Component {
  render() {
    const { visible, handleClose } = this.props;
    return (
      <SacModal
        title={upperCaseString('message sent')}
        visible={visible}
        closable
        mask
        maskClosable
        footer={[
          <SacButton
            style={{ ...actionButton }}
            key='back'
            onClick={handleClose}
          >
            Close
          </SacButton>
        ]}
      >
        <SacTitle style={{ ...defaultTitleStyle }} level={3}>
          Please check your email, we’ve sent you instructions to complete
          registration.
        </SacTitle>
        <br />
      </SacModal>
    );
  }
}

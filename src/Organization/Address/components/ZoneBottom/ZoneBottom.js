import React, { Component } from 'react';

import { Slider } from 'antd';

import { SacRow } from 'components/SacRow';
import { SacCol } from 'components/SacCol';
import { SacCard } from 'components/SacCard';
import { SacText } from 'components/SacText';

export default class ZoneBottom extends Component {
  render() {
    return (
      <SacCard
        style={{
          width: '40%',
          height: '60px',
          padding: 0,
          borderRadius: '4px',
          bottom: '10px',
          left: '220px',
          position: 'fixed',
          backgroundColor: '#043491'
        }}
        bodyStyle={{ padding: '10px 15px', height: 60 }}
      >
        <SacRow type='flex' align='middle' justify='space-between'>
          <SacCol span={8}>
            <Slider
              style={{ margin: 0, width: '100%', float: 'left' }}
              defaultValue={60}
            />
          </SacCol>
          <SacCol span={13} style={{ textAlign: 'center' }}>
            <SacText
              style={{
                color: '#ffffff',
                top: 0,
                fontSize: 12,
                textAlign: 'center'
              }}
            >
              Adjust slider to create +/- zones for your organization
            </SacText>
          </SacCol>
          <SacCol span={3}>
            <SacText
              style={{
                color: '#ffffff',
                top: 0,
                fontSize: '24px',
                float: 'right',
                textAlign: 'center',
                borderRadius: '4px',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(216, 216, 216, 0.2)'
              }}
            >
              25
            </SacText>
          </SacCol>
        </SacRow>
      </SacCard>
    );
  }
}

import React from 'react';
import IceContainer from '@icedesign/container';

import ContainerTitle from '../ContainerTitle';
import RealtimeLineChart from './RealtimeLineChart';

export default function TimeDistribution() {
  return (
    <IceContainer>
      <ContainerTitle title="耗时分布" />
      <RealtimeLineChart />
    </IceContainer>
  );
}

import React from 'react';
import IceContainer from '@icedesign/container';

import ContainerTitle from '../ContainerTitle';
import DoubleAxesChart from './DoubleAxesChart';

export default function PercentageComplete() {
  return (
    <IceContainer>
      <ContainerTitle title="完成效率" />
      <DoubleAxesChart />
    </IceContainer>
  );
}

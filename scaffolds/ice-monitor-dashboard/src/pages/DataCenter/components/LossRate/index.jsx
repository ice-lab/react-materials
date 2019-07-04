import React from 'react';
import IceContainer from '@icedesign/container';

import ContainerTitle from '../ContainerTitle';
import ColumnChart from './ColumnChart';

export default function LossRate() {
  return (
    <IceContainer>
      <ContainerTitle title="流失率" />
      <ColumnChart />
    </IceContainer>
  );
}

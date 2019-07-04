import React from 'react';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../ContainerTitle';
import RegionFilterRealtime from './RegionFilterRealtime';

export default function AverageTime() {
  return (
    <IceContainer>
      <ContainerTitle title="平均时长分布" />
      <RegionFilterRealtime />
    </IceContainer>
  );
}

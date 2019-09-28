import React from 'react';
import IceContainer from '@icedesign/container';
import ContainerTitle from '@/components/ContainerTitle';
import GradientChart from './GradientChart';

export default function UseQuantity() {
  return (
    <IceContainer style={{ padding: 0 }}>
      <ContainerTitle title="调用量" />
      <GradientChart />
    </IceContainer>
  );
}

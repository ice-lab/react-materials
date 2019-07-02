import React from 'react';
import IceContainer from '@icedesign/container';
import ContainerTitle from '@/components/ContainerTitle';
import LineChart from './LineChart';

export default function Trend() {
  return (
    <IceContainer style={{ padding: 0 }}>
      <ContainerTitle title="请求数量趋势" />
      <LineChart />
    </IceContainer>
  );
}

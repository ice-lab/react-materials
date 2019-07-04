import React from 'react';
import { DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../ContainerTitle';
import AreaChart from './AreaChart';

export default function TimeDistribution(props) {
  return (
    <IceContainer>
      <ContainerTitle
        title={props.title}
        extraAfter={
          <DatePicker onChange={(val, str) => console.log(val, str)} />
        }
      />
      <AreaChart />
    </IceContainer>
  );
}

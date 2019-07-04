import React from 'react';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../../components/ContainerTitle';
import ModalCard from './components/ModelCard';

export default function ModelMarket() {
  return (
    <IceContainer style={{ padding: 0 }}>
      <ContainerTitle title="模型市场" />
      <ModalCard />
    </IceContainer>
  );
}

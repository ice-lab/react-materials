import React from 'react';
import IceContainer from '@icedesign/container';
import { Map, InfoWindow } from 'react-amap';

const value = '飞冰 - 让前端开发简单而友好';
// https://elemefe.github.io/react-amap/components/infowindow
export default function MapWithAInfoWindow() {
  const position = {
    longitude: 120.026208,
    latitude: 30.279212,
  };

  const html = `<div>
    <p>${value}</p>
  </div>`;

  return (
    <IceContainer style={{ height: 400 }}>
      <Map plugins={['ToolBar']} center={position} zoom={15}>
        <InfoWindow position={position} visible content={html} />
      </Map>
    </IceContainer>
  );
}

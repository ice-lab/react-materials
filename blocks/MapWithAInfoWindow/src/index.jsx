import React from 'react';
import IceContainer from '@icedesign/container';
import { Map, InfoWindow } from 'react-amap';

const value = '阿里巴巴西溪园区';
// https://elemefe.github.io/react-amap/components/infowindow
export default function MapWithAInfoWindow() {
  const position = {
    longitude: 120.026208,
    latitude: 30.279212,
  };

  const html = `<div style="margin: 0">${value}</div>`;

  return (
    <IceContainer style={{ height: 400 }}>
      <h3>高德地图-信息弹窗</h3>
      <Map plugins={['ToolBar']} center={position} zoom={15}>
        <InfoWindow position={position} visible content={html} />
      </Map>
    </IceContainer>
  );
}

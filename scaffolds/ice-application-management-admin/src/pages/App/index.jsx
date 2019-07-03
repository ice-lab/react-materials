import React from 'react';
import { Grid } from '@alifd/next';

import BaseInfo from './components/BaseInfo';
import OverView from './components/OverView';
import QPSChart from './components/QPSChart';
import RTChart from './components/RTChart';
import CPUChart from './components/CPUChart';

const { Row, Col } = Grid;

export default function App() {
  return (
    <div className="app-page" >
      <OverView />
      <Row gutter="20">
        <Col>
          <QPSChart />
        </Col>
        <Col>
          <RTChart />
        </Col>
      </Row>
      <CPUChart />
      <BaseInfo />
    </div>
  );
};

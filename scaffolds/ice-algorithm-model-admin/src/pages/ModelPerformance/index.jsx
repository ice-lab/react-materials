import React from 'react';
import { Grid } from '@alifd/next';
import Overview from './components/Overview';
import ModelList from './components/ModelList';
import ModelService from './components/ModelService';
import UseQuantity from './components/UseQuantity';
import Performance from './components/Performance';

const { Row, Col } = Grid;

export default function ModelPerformance() {
  return (
    <Row gutter="20" wrap>
      <Col l="24" xxs="24">
        <Overview />
      </Col>
      <Col l="6">
        <ModelList />
      </Col>
      <Col l="18">
        <UseQuantity />
        <ModelService />
        <Performance />
      </Col>
    </Row>
  );
}

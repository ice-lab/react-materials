import React from 'react';
import { Grid } from '@alifd/next';
import BarChart from './BarChart';
import LineChart from './LineChart';

const { Row, Col } = Grid;

export default function LineBarChart() {
  return (
    <Row gutter="20" wrap>
      <Col l="12">
        <BarChart />
      </Col>
      <Col l="12">
        <LineChart />
      </Col>
    </Row>
  );
}

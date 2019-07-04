import React from 'react';
import { Grid } from '@alifd/next';

import FrequencyChart from './FrequencyChart';
import DurationChart from './DurationChart';

const { Row, Col } = Grid;

export default function AccessDistribution() {
  return (
    <Row gutter="20">
      <Col l="12">
        <FrequencyChart />
      </Col>
      <Col l="12">
        <DurationChart />
      </Col>
    </Row>
  );
}

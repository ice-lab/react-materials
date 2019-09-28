import React from 'react';
import { Grid } from '@alifd/next';
import BasicPieChart from '../BasicPieChart';
import PieLegendChart from '../PieLegendChart';

const { Row, Col } = Grid;

export default function BuilderDistribution() {
  return (
    <Row wrap gutter="20">
      <Col l="12">
        <BasicPieChart />
      </Col>
      <Col l="12">
        <PieLegendChart />
      </Col>
    </Row>
  );
}
BuilderDistribution.displayName = 'BuilderDistribution';

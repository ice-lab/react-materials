import React from 'react';
import { Grid } from '@alifd/next';
import Notice from './Notice';
import Team from './Team';

const { Row, Col } = Grid;

export default function Overview() {
  return (
    <Row wrap gutter={20}>
      <Col l="12">
        <Notice />
      </Col>
      <Col l="12">
        <Team />
      </Col>
    </Row>
  );
}

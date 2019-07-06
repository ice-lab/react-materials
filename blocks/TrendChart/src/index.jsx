import React from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import LineChart from './LineChart';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

export default function TrendChart() {
  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>质量分及配置趋势</h4>
      <Row>
        <Col l="12">
          <LineChart />
        </Col>
        <Col l="12">
          <LineChart />
        </Col>
      </Row>
    </IceContainer>
  );
}

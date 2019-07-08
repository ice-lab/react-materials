import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import RadarChart from './RadarChart';
import HistogramChart from './HistogramChart';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default function PerformanceIndicator() {
  return (
    <IceContainer className={styles.box}>
      <h3 className={styles.title}>性能指标</h3>
      <Row wrap gutter="20" className="row">
        <Col l="12">
          <RadarChart />
        </Col>
        <Col l="12">
          <HistogramChart />
        </Col>
      </Row>
    </IceContainer>
  );
}

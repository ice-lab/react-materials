import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import CustomTable from '../HealthAnalysis/CustomTable';
import PirChart from '../HealthAnalysis/PieChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function HealthAnalysis() {
  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>计算健康分析</h4>
      <Row>
        <Col l="8">
          <PirChart />
        </Col>
        <Col l="16">
          <CustomTable />
        </Col>
      </Row>
    </IceContainer>
  );
}



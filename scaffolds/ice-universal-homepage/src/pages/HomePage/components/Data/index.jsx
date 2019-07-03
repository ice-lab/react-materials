import React from 'react';
import { Grid } from '@alifd/next';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Data() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>提效数据</h3>
      <div className={styles.content}>
        <Row gutter="20">
          <Col l="8">
            <BarChart />
          </Col>
          <Col l="8">
            <PieChart />
          </Col>
          <Col l="8">
            <LineChart />
          </Col>
        </Row>
      </div>
    </div>
  );
}

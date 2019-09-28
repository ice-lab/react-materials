import React from 'react';
import { Card, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Cards() {
  return (
    <Row wrap gutter="20" className={styles.row}>
      <Col l="6" className={styles.card}>
        <Card title="请求数量" contentHeight="auto" className={styles.card}>
          <h2 className={styles.counterNum}>1002</h2>
        </Card>
      </Col>
      <Col l="6" className={styles.card}>
        <Card title="平均延时" contentHeight="auto" className={styles.card}>
          <h2 className={styles.counterNum}>234,32</h2>
        </Card>
      </Col>
      <Col l="6" className={styles.card}>
        <Card title="未理解数量" contentHeight="auto" className={styles.card}>
          <h2 className={styles.counterNum}>236,123</h2>
        </Card>
      </Col>
      <Col l="6" className={styles.card}>
        <Card title="超时次数" contentHeight="auto" className={styles.card}>
          <h2 className={styles.counterNum}>549,234</h2>
        </Card>
      </Col>
    </Row>
  );
}

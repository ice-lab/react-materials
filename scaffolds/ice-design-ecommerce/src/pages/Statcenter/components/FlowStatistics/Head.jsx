import React from 'react';
import { Grid } from '@alifd/next';
import ColumnChart from './ColumnChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Head(props) {
  const { data } = props;
  return (
    <Row wrap>
      <Col xxs="12" s="12" l="6">
        <div className={styles.box}>
          <p className={styles.textLabel}>
            浏览次数
          </p>
          <h2 className={styles.counterNum}>
            {data.visits}
          </h2>
          <ColumnChart />
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className={styles.box}>
          <p className={styles.textLabel}>
            独立访客
          </p>
          <h2 className={styles.counterNum}>
            {data.unique_users}
          </h2>
          <ColumnChart color="#fcdb51" />
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className={styles.box}>
          <p className={styles.textLabel}>
            IP
          </p>
          <h2 className={styles.counterNum}>
            {data.ip}
          </h2>
          <ColumnChart color="#2eca9c" />
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className={styles.box}>
          <p className={styles.textLabel}>
            点击次数
          </p>
          <h2 className={styles.counterNum}>
            {data.click}
          </h2>
          <ColumnChart color="#fa706f" />
        </div>
      </Col>
    </Row>
  );
}
Head.displayName = 'Head';

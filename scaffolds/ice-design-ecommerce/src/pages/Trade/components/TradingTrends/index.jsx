import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import LineChart from './LineChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class TradingTrends extends Component {
  render() {
    return (
      <IceContainer title="交易趋势">
        <Row gutter="20">
          <Col l="6">
            <div className={styles.content}>
              <div className={styles.item}>
                <h5 className={styles.title}>下单笔数</h5>
                <h2 className={styles.value}>12,234</h2>
              </div>
              <div className={styles.item}>
                <h5 className={styles.title}>退货笔数</h5>
                <h2 className={styles.value}>5,483</h2>
              </div>
            </div>
          </Col>
          <Col l="18">
            <LineChart />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}



import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import AreaChart from './AreaChart';
import OrderTable from './OrderTable';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function OrderStatusChart() {
  return (
    <IceContainer title="订单概览">
      <Row wrap>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <h2 className={styles.counterNum}>
              5675
              {' '}
              <Icon
                size="xs"
                type="arrow-down-filling"
                className={`${styles.arrowIcon} ${styles.arrowDown}`}
              />
            </h2>
            <p className={styles.textLabel}>日订单量</p>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <h2 className={styles.counterNum}>
              7841
              {' '}
              <Icon
                size="xs"
                type="arrow-up-filling"
                className={`${styles.arrowIcon} ${styles.arrowDown}`}
              />
            </h2>
            <p className={styles.textLabel}>订单完成</p>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <h2 className={styles.counterNum}>
              6521
              {' '}
              <Icon
                size="xs"
                type="arrow-down-filling"
                className={`${styles.arrowIcon} ${styles.arrowDown}`}
              />
            </h2>
            <p className={styles.textLabel}>月销售量</p>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
            <h2 className={styles.counterNum}>
              ￥ 128954
              {' '}
              <Icon
                size="xs"
                type="arrow-up-filling"
                className={`${styles.arrowIcon} ${styles.arrowDown}`}
              />
            </h2>
            <p className={styles.textLabel}>累计收入</p>
          </div>
        </Col>
      </Row>
      <AreaChart />
      <OrderTable />
    </IceContainer>
  );
}

import React, { Component } from '_react@16.8.6@react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import CountUp from '_react-countup@3.0.3@react-countup/build';
import AreaChart from './AreaChart';
import styles from './index.module.scss';
const { Row, Col } = Grid;

export default class OverviewChart extends Component {
  render() {
    return (
      <IceContainer title="月考报表">
        <Row wrap>
          <Col xxs="12" s="12" l="6">
            <div className={styles.box}>
              <h2 className={styles.counterNum}>
                <CountUp start={1000} end={5675} duration={2} useEasing />{' '}
                <Icon
                  size="xs"
                  type="arrow-down-filling"
                  className={styles.hb1}
                />
              </h2>
              <p className={styles.textLabel}>及格人数</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div className={styles.box}>
              <h2 className={styles.counterNum}>
                <CountUp start={1000} end={7841} duration={2} useEasing />{' '}
                <Icon
                  size="xs"
                  type="arrow-up-filling"
                  className={styles.hb2}
                />
              </h2>
              <p className={styles.textLabel}>满分人数</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div className={styles.box}>
              <h2 className={styles.counterNum}>
                <CountUp start={1000} end={6521} duration={2} useEasing />{' '}
                <Icon
                  size="xs"
                  type="arrow-down-filling"
                  className={styles.hb1}
                />
              </h2>
              <p className={styles.textLabel}>不及格人数</p>
            </div>
          </Col>
          <Col xxs="12" s="12" l="6">
            <div className={styles.box}>
              <h2 className={styles.counterNum}>
                <CountUp start={1000} end={8954} duration={2} useEasing />{' '}
                <Icon
                  size="xs"
                  type="arrow-up-filling"
                  className={styles.hb2}
                />
              </h2>
              <p className={styles.textLabel}>总人数</p>
            </div>
          </Col>
        </Row>
        <AreaChart />
      </IceContainer>
    );
  }
}
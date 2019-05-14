import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid } from '@alifd/next';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class AccuracyRate extends Component {
  static displayName = 'AccuracyRate';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer title="无人值守准确率" className={styles.circleprogress}>
        <Row wrap align="center" style={{ height: '200px' }}>
          <Col l="12">
            <div className={styles.chart}>
              <Progress
                percent={100}
                shape="circle"
                size="large"
              />
            </div>
          </Col>
          <Col l="12">
            <div className={styles.list}>
              <div className={styles.item}>
                <span className={styles.label}>准确率</span>
                <span className={styles.number}>100%</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>召回率</span>
                <span className={styles.number}>100%</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>周环比</span>
                <span className={styles.number}>0%</span>
              </div>
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

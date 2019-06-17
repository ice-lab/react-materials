import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import GradientLineChart from './GradientLineChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class QualityTrend extends Component {
  static displayName = 'QualityTrend';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.title}>质量分及配置趋势</h4>
        <Row>
          <Col l="12">
            <GradientLineChart />
          </Col>
          <Col l="12">
            <GradientLineChart />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}


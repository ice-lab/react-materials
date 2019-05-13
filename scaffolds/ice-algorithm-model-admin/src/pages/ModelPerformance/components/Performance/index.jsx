import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import ContainerTitle from '../../../../components/ContainerTitle';
import RadarChart from './RadarChart';
import HistogramChart from './HistogramChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Performance extends Component {
  static displayName = 'Performance';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer style={{ padding: 0 }}>
        <ContainerTitle title="性能指标" />
        <Row wrap gutter="20" className={styles.width}>
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
}

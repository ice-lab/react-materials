import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import RadarChart from './RadarChart';
import HistogramChart from './HistogramChart';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class PerformanceIndicator extends Component {
  static displayName = 'PerformanceIndicator';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className="box">
        <h3 className="stylestitle">性能指标</h3>
        <Row wrap gutter="20" className="row">
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

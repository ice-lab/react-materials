import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import LineChart from './LineChart';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class TrendChart extends Component {
  static displayName = 'TrendChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className="stylescontainer">
        <h4 className="stylestitle">质量分及配置趋势</h4>
        <Row>
          <Col l="12">
            <LineChart />
          </Col>
          <Col l="12">
            <LineChart />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

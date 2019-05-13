import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import PieDonutChart from './PieDonutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';

const { Row, Col } = Grid;

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Row wrap gutter="10">
          <Col xxs="24" s="8" l="8">
            <IceContainer title="人群特征">
              <PieDonutChart />
            </IceContainer>
          </Col>
          <Col xxs="24" s="8" l="8">
            <IceContainer title="曝光量">
              <BarChart />
            </IceContainer>
          </Col>
          <Col xxs="24" s="8" l="8">
            <IceContainer title="访问量">
              <LineChart />
            </IceContainer>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}



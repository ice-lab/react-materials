import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import CustomTable from './CustomTable';
import PirChart from './PieChart';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class TableChartCard extends Component {
  static displayName = 'TableChartCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer className="stylescontainer">
        <h4 className="stylestitle">计算健康分析</h4>
        <Row wrap>
          <Col l="8">
            <PirChart />
          </Col>
          <Col l="16">
            <CustomTable />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

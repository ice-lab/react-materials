import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import OverviewSatesChart from './components/OverviewSatesChart/index';
import EarningsChart from './components/EarningsChart/index';
import TotalAmount from './components/TotalAmount/index';
import BorrowingChart from './components/BorrowingChart/index';
import CustomTable from './components/CustomTable/index';

const { Row, Col } = Grid;

export default class Index extends Component {
  render() {
    return (
      <div>
        <OverviewSatesChart />
        <Row wrap gutter="20">
          <Col l="10">
            <TotalAmount />
          </Col>
          <Col l="14">
            <EarningsChart />
          </Col>
          <Col l="24">
            <BorrowingChart />
          </Col>
          <Col l="12">
            <CustomTable />
          </Col>
          <Col l="12">
            <CustomTable />
          </Col>
        </Row>
      </div>
    );
  }
}

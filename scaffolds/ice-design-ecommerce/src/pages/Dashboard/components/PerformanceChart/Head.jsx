import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default function Head(props) {
  const { data } = props;
  return (
    <Row wrap>
      <Col xxs="12" s="12" l="6">
        <div className="box">
          <p className="textLabel">
            昨日支付金额(元)
          </p>
          <h2 className="counterNum">
            {data.day}
          </h2>
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className="box">
          <p className="textLabel">
            本月已完成(元)
          </p>
          <h2 className="counterNum">
            {data.month}
          </h2>
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className="box">
          <p className="textLabel">
            本月目标(元)
          </p>
          <h2 className="counterNum">
            {data.target}
          </h2>
        </div>
      </Col>
      <Col xxs="12" s="12" l="6">
        <div className="box">
          <p className="textLabel">
            完成进度(%)
          </p>
          <h2 className="counterNum">
            {data.percent}
          </h2>
        </div>
      </Col>
    </Row>
  );
}
Head.displayName = 'Head';

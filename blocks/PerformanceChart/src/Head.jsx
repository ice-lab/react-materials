import React, { Component } from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default class Head extends Component {
  static displayName = 'Head';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Row wrap>
        <Col xxs="12" s="12" l="6">
          <div  className="stylesbox">
            <p className="stylestextLabel">昨日支付金额(元)</p>
            <h2 className="stylescounterNum">{data.day}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className="stylesbox">
            <p className="stylestextLabel">本月已完成(元)</p>
            <h2 className="stylescounterNum">{data.month}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className="stylesbox">
            <p className="stylestextLabel">本月目标(元)</p>
            <h2 className="stylescounterNum">{data.target}</h2>
          </div>
        </Col>
        <Col xxs="12" s="12" l="6">
          <div  className="stylesbox">
            <p className="stylestextLabel">完成进度(%)</p>
            <h2 className="stylescounterNum">{data.percent}</h2>
          </div>
        </Col>
      </Row>
    );
  }
}

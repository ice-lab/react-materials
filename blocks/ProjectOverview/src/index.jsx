import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import ContainerTitle from './ContainerTitle';
import './index.modules.scss'

const { Row, Col } = Grid;

const mockData = [
  {
    title: '计划中(个)',
    value: '87',
  },
  {
    title: '正在进行中(个)',
    value: '62',
  },
  {
    title: '已完成(个)',
    value: '123',
  },
  {
    title: '完成平均时长(天)',
    value: '39',
  },
  {
    title: '参与成员(人)',
    value: '18',
  },
];

export default class Overview extends Component {
  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ContainerTitle title="本周概览" />
        <IceContainer>
          <Row>
            <Col l="4">
              <div className="stylesitem">
                <img src={require('./images/box.svg')} alt="" />
              </div>
            </Col>
            {mockData.map((item, index) => {
              return (
                <Col l="4" key={index}>
                  <div className="stylesitem">
                    <p className="stylesitemTitle">{item.title}</p>
                    <p className="stylesitemValue">{item.value}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </IceContainer>
      </div>
    );
  }
}

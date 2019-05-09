import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import './TextCard.scss';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class TextCard extends Component {
  static displayName = 'TextCard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Row wrap>
          <Col xxs="12" s="12" l="8" className="stylestextCardItem">
            <div className="stylestextCardSubtitle">我的待办</div>
            <div className="text-card-title stylestextCardTitle">
              <span className="text-card-number stylestextCardNumber">
                8
              </span>个任务
            </div>
          </Col>

          <Col xxs="12" s="12" l="8" className="stylestextCardItem">
            <div className="stylestextCardSubtitle">本周任务平均处理时间</div>
            <div className="text-card-title stylestextCardTitle">
              <span className="text-card-number stylestextCardNumber">
                32
              </span>分钟
            </div>
          </Col>

          <Col
            xxs="12"
            s="12"
            l="8"
            className="stylestextCardItem1"
          >
            <div className="stylestextCardSubtitle">本周完成任务数</div>
            <div className="text-card-title stylestextCardTitle">
              <span className="text-card-number stylestextCardNumber">
                23
              </span>个任务
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

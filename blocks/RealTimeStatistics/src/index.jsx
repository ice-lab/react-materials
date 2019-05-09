import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import './index.modules.scss'
const { Row, Col } = Grid;

export default class RealTimeStatistics extends Component {
  static displayName = 'RealTimeStatistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="real-time-statistics">
        <Row wrap gutter="20">
          <Col xxs="24" s="12" l="6">
            <div className="stylesitemBody green">
              <div className="stylesitemTitle">
                <p className="stylestitleText">分类统计</p>
                <span className="stylestag">实时</span>
              </div>
              <div>
                <h2 className="stylesitemNum">7,993</h2>
                <div>
                  <p className="stylestotal">7,993</p>
                  <p className="stylesdesc">当前分类总记录数</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div className="stylesitemBody lightBlue">
              <div className="stylesitemTitle">
                <p className="stylestitleText">附件统计</p>
                <span className="stylestag">实时</span>
              </div>
              <div>
                <h2 className="stylesitemNum">3,112</h2>
                <div>
                  <p className="stylestotal">3,112</p>
                  <p className="stylesdesc">当前上传的附件数</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div className="stylesitemBody darkBlue">
              <div className="stylesitemTitle">
                <p className="stylestitleText">文章统计</p>
                <span className="stylestag">实时</span>
              </div>
              <div className="stylesitemRow">
                <div>
                  <h2 className="stylesitemNum">908</h2>
                  <p className="stylesdesc">评论次数</p>
                </div>
                <div>
                  <h2 className="stylesitemNum">263</h2>
                  <p className="stylesdesc">点赞次数</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6">
            <div className="stylesitemBody navyBlue">
              <div className="stylesitemTitle">
                <p className="stylestitleText">新闻统计</p>
                <span className="stylestag">实时</span>
              </div>
              <div className="stylesitemRow">
                <div >
                  <h2 className="stylesitemNum">908</h2>
                  <p className="stylesdesc">评论次数</p>
                </div>
                <div>
                  <h2 className="stylesitemNum">263</h2>
                  <p className="stylesdesc">点赞次数</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

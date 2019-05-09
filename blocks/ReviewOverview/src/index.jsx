import React, { Component } from 'react';
import { Grid, Rating } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Progress from './Progress';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class ReviewOverview extends Component {
  static displayName = 'ReviewOverview';

  render() {
    return (
      <Row wrap gutter="20">
        <Col s="12" xxs="24">
          <IceContainer className="stylescontainer" title="评价概览">
            <div className="stylesoverviewData">
              388 <span className="stylesoverviewDataUnit">分</span>
            </div>
            <div className="stylesoverviewDataDetail">
              <div>
                <div className="stylesoverviewDataDetailCount">+21.8%</div>
                <div className="stylesoverviewDataDetailDesc">
                  好评环比增长比例
                </div>
              </div>
              <div>
                <div className="stylesoverviewDataDetailCount">+10.2%</div>
                <div className="stylesoverviewDataDetailDesc">
                  好评同比增长比例
                </div>
              </div>
              <div>
                <div className="stylesoverviewDataDetailCount">+52</div>
                <div className="stylesoverviewDataDetailDesc">
                  好评环比增长数量
                </div>
              </div>
            </div>
            <div className="stylesoverviewDataExtraLinks">
              <div className="stylesoverviewDataExtraLinksTitle">扩展链接</div>
              <div className="stylesoverviewDataExtraLinksWrapper">
                <a className="stylesoverviewDataExtraLink" href="" target="_blank">
                  微博
                </a>
                <a className="stylesoverviewDataExtraLink" href="" target="_blank">
                  知乎
                </a>
                <a className="stylesoverviewDataExtraLink" href="" target="_blank">
                  头条
                </a>
              </div>
            </div>
          </IceContainer>
        </Col>
        <Col s="12" xxs="24">
          <IceContainer className="stylescontainer" title="评分概览">
            <div className="stylesoverviewRatingWrapper">
              <span className="stylesoverviewRatingCount">4.5</span>
              <span>
                <Rating value={4.5} disabled />
              </span>
            </div>
            <div className="stylesoverviewDetail">
              <div className="stylesoverviewDetailItem">
                <span className="stylesoverviewDetailItemText">5 星</span>
                <span className="stylesoverviewDetailItemPercentWrapper">
                  <Progress
                    className="stylesoverviewDetailItemPercent"
                    color="#27ae60"
                    percent={90}
                    extra="480"
                  />
                </span>
              </div>
              <div className="stylesoverviewDetailItem">
                <span className="stylesoverviewDetailItemText">4 星</span>
                <span className="stylesoverviewDetailItemPercentWrapper">
                  <Progress
                    className="stylesoverviewDetailItemPercent"
                    color="#2980b9"
                    percent={70}
                    extra="270"
                  />
                </span>
              </div>
              <div className="stylesoverviewDetailItem">
                <span className="stylesoverviewDetailItemText">3 星</span>
                <span className="stylesoverviewDetailItemPercentWrapper">
                  <Progress
                    className="stylesoverviewDetailItemPercent"
                    color="#f1c40f"
                    percent={10}
                    extra="40"
                  />
                </span>
              </div>
              <div className="stylesoverviewDetailItem">
                <span className="stylesoverviewDetailItemText">2 星</span>
                <span className="stylesoverviewDetailItemPercentWrapper">
                  <Progress
                    className="stylesoverviewDetailItemPercent"
                    color="#e67e22"
                    percent={4}
                    extra="10"
                  />
                </span>
              </div>
              <div className="stylesoverviewDetailItem">
                <span className="stylesoverviewDetailItemText">1 星</span>
                <span className="stylesoverviewDetailItemPercentWrapper">
                  <Progress
                    className="stylesoverviewDetailItemPercent"
                    color="#e74c3c"
                    percent={0}
                    extra="0"
                  />
                </span>
              </div>
            </div>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

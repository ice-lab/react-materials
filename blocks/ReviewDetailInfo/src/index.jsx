import React, { Component } from 'react';
import { Grid, Progress, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import './index.modules.scss'

const { Row, Col } = Grid;

export default class ReviewDetailInfo extends Component {
  static displayName = 'ReviewDetailInfo';

  render() {
    return (
      <Row wrap gutter="20">
        <Col s="8" xxs="24">
          <IceContainer className="stylescontainer" title="好评比率">
            <div className="stylesreviewRatingWrapper">
              <div className="stylesreviewRating">
                <span className="stylesreviewRatingIcon">
                  <span className="stylesreviewRatingScore">630</span>
                  <Icon
                    size="xxl"
                    className="stylesreviewRatingIconPositive"
                    type="smile"
                  />
                  <span className="stylesreviewRatingRatePositive">67%</span>
                </span>
              </div>
              <div className="stylesreviewRatingDesc">好评</div>
            </div>
            <div className="stylesreviewRatingDivideLine" />
            <div className="stylesreviewRatingWrapper">
              <div className="stylesreviewRating">
                <span  className="stylesreviewRatingIcon">
                  <span className="stylesreviewRatingScore">310</span>
                  <Icon
                    size="xxl"
                    className="stylesreviewRatingIconNegative"
                    type="cry"
                  />
                  <span className="stylesreviewRatingRateNegative">33%</span>
                </span>
              </div>
              <div className="stylesreviewRatingDesc">差评</div>
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer className="stylescontainer" title="邀评目标">
            <div className="stylesreviewTargetProgressWrapper">
              <Progress
                percent={50}
                size="large"
                shape="circle"
                textRender={() => <span>392 份</span>}
              />
            </div>
            <div className="stylesreviewRatingGoalDesc">
              <p>已经完成一半目标，加油！</p>
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer className="stylescontainer" title="邀评排行">
            <div>
              <div className="stylesreviewLeaderboardItem">
                <span className="stylesreviewLeaderboardItemAvatar">
                  <img
                    className="stylesreviewLeaderboardItemAvatarImg"
                    width="40"
                    height="40"
                    src={require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className="stylesreviewLeaderboardItemName">李总</span>
                <span>912 份</span>
              </div>
              <div className="stylesreviewLeaderboardItem">
                <span className="stylesreviewLeaderboardItemAvatar">
                  <img
                    className="stylesreviewLeaderboardItemAvatarImg"
                    width="40"
                    height="40"
                    src={require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className="stylesreviewLeaderboardItemName">王总</span>
                <span>675 份</span>
              </div>
              <div className="stylesreviewLeaderboardItem">
                <span className="stylesreviewLeaderboardItemAvatar">
                  <img
                    className="stylesreviewLeaderboardItemAvatarImg"
                    width="40"
                    height="40"
                    src={require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className="stylesreviewLeaderboardItemName">赵总</span>
                <span>588 份</span>
              </div>
              <div className="stylesreviewLeaderboardItem">
                <span className="stylesreviewLeaderboardItemAvatar">
                  <img
                    className="stylesreviewLeaderboardItemAvatarImg"
                    width="40"
                    height="40"
                    src={require('./images/TB1AdOerVOWBuNjy0FiXXXFxVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className="stylesreviewLeaderboardItemName">马总</span>
                <span>462 份</span>
              </div>
              <div className="stylesreviewLeaderboardItem">
                <span className="stylesreviewLeaderboardItemAvatar">
                  <img
                    className="stylesreviewLeaderboardItemAvatarImg"
                    width="40"
                    height="40"
                    src={require('./images/TB1FWimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className="stylesreviewLeaderboardItemName">雷总</span>
                <span>376 份</span>
              </div>
            </div>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  reviewLeaderboardItemName: {
    flex: 1,
  },
};

import React, { Component } from 'react';
import { Grid, Progress, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class ReviewDetailInfo extends Component {
  static displayName = 'ReviewDetailInfo';

  render() {
    return (
      <Row wrap gutter="20">
        <Col s="8" xxs="24">
          <IceContainer className={styles.container} title="好评比率">
            <div className={styles.reviewRatingWrapper}>
              <div className={styles.reviewRating}>
                <span className={styles.reviewRatingIcon}>
                  <span className={styles.reviewRatingScore}>630</span>
                  <Icon
                    size="xxl"
                    className={styles.reviewRatingIconPositive}
                    type="smile"
                  />
                  <span className={styles.reviewRatingRatePositive}>67%</span>
                </span>
              </div>
              <div className={styles.reviewRatingDesc}>好评</div>
            </div>
            <div className={styles.reviewRatingDivideLine} />
            <div className={styles.reviewRatingWrapper}>
              <div className={styles.reviewRating}>
                <span  className={styles.reviewRatingIcon}>
                  <span className={styles.reviewRatingScore}>310</span>
                  <Icon
                    size="xxl"
                    className={styles.reviewRatingIconNegative}
                    type="cry"
                  />
                  <span className={styles.reviewRatingRateNegative}>33%</span>
                </span>
              </div>
              <div className={styles.reviewRatingDesc}>差评</div>
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer className={styles.container} title="邀评目标">
            <div className={styles.reviewTargetProgressWrapper}>
              <Progress
                percent={50}
                size="large"
                shape="circle"
                textRender={() => <span>392 份</span>}
              />
            </div>
            <div className={styles.reviewRatingGoalDesc}>
              <p>已经完成一半目标，加油！</p>
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer className={styles.container} title="邀评排行">
            <div>
              <div className={styles.reviewLeaderboardItem}>
                <span className={styles.reviewLeaderboardItemAvatar}>
                  <img
                    className={styles.reviewLeaderboardItemAvatarImg}
                    width="40"
                    height="40"
                    src={require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className={styles.reviewLeaderboardItemName}>李总</span>
                <span>912 份</span>
              </div>
              <div className={styles.reviewLeaderboardItem}>
                <span className={styles.reviewLeaderboardItemAvatar}>
                  <img
                    className={styles.reviewLeaderboardItemAvatarImg}
                    width="40"
                    height="40"
                    src={require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className={styles.reviewLeaderboardItemName}>王总</span>
                <span>675 份</span>
              </div>
              <div className={styles.reviewLeaderboardItem}>
                <span className={styles.reviewLeaderboardItemAvatar}>
                  <img
                    className={styles.reviewLeaderboardItemAvatarImg}
                    width="40"
                    height="40"
                    src={require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className={styles.reviewLeaderboardItemName}>赵总</span>
                <span>588 份</span>
              </div>
              <div className={styles.reviewLeaderboardItem}>
                <span className={styles.reviewLeaderboardItemAvatar}>
                  <img
                    className={styles.reviewLeaderboardItemAvatarImg}
                    width="40"
                    height="40"
                    src={require('./images/TB1AdOerVOWBuNjy0FiXXXFxVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className={styles.reviewLeaderboardItemName}>马总</span>
                <span>462 份</span>
              </div>
              <div className={styles.reviewLeaderboardItem}>
                <span className={styles.reviewLeaderboardItemAvatar}>
                  <img
                    className={styles.reviewLeaderboardItemAvatarImg}
                    width="40"
                    height="40"
                    src={require('./images/TB1FWimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg')}
                    alt=""
                  />
                </span>
                <span className={styles.reviewLeaderboardItemName}>雷总</span>
                <span>376 份</span>
              </div>
            </div>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

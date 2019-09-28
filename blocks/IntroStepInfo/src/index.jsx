import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <div className="intro-step-info">
      <IceContainer>
        <div className={styles.customVideoCard}>
          <h3 className={styles.customVideoTitle}>
            官方优选短视频制作有什么不同？
          </h3>
          <Row className={styles.customVideoIntro}>
            <Col span="6">
              <div className={styles.introItem}>
                <img
                  src={require('./images/TB1JngwmXmWBuNjSspdXXbugXXa-120-112.png')}
                  className={styles.imgWidthFour}
                  alt=""
                />
                <h5 className={styles.introItemTitle}>作品更优质</h5>
                <p className={styles.introItemDesc}>
                  累计服务3000+商家<br />服务评分超4.8
                </p>
              </div>
            </Col>
            <Col span="6">
              <div className={styles.introItem}>
                <img
                  src={require('./images/TB1Bp8mmuOSBuNjy0FdXXbDnVXa-102-102.png')}
                  className={styles.imgWidthThree}
                  alt=""
                />
                <h5 className={styles.introItemTitle}>响应更及时</h5>
                <p className={styles.introItemDesc}>
                  工作日保证一小时内<br />有专人联系
                </p>
              </div>
            </Col>

            <Col span="6">
              <div className={styles.introItem}>
                <img
                  src={require('./images/TB1KDgwmXmWBuNjSspdXXbugXXa-156-156.png')}
                  className={styles.imgWidthThree}
                  alt=""
                />
                <h5 className={styles.introItemTitle}>合作更放心</h5>
                <p className={styles.introItemDesc}>
                  所有服务机构<br />均与官方签约
                </p>
              </div>
            </Col>
            <Col span="6">
              <div className={styles.introItem}>
                <img
                  src={require('./images/TB1dqlRmqmWBuNjy1XaXXXCbXXa-112-116.png')}
                  className={styles.imgWidthTwo}
                  alt=""
                />
                <h5 className={styles.introItemTitle}>操作更便捷</h5>
                <p className={styles.introItemDesc}>
                  无需繁琐的挑选<br />系统智能派单给专业机构
                </p>
              </div>
            </Col>
          </Row>

          <div className={styles.customVideoSteps}>
            <h3 className={styles.customStepsTitle}>如何三步完成短视频制作？</h3>
            <img
              src={require('./images/TB1JUuGmCtYBeNjSspaXXaOOFXa-1064-88.png')}
              className={styles.imgWidthOne}
              alt=""
            />
          </div>

          <a href="#" className={styles.customBtn}>立即定制短视频</a>
        </div>
      </IceContainer>
    </div>
  );
}

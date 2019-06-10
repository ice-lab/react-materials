/* eslint react/jsx-no-target-blank: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class extends Component {
  static displayName = '';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const down = (
      <img
        src={require('./images/TB1ReMsh3vD8KJjy0FlXXagBFXa-12-18.png')}
        className={styles.down}
        alt=""
      />
    );
    const up = (
      <img
        src={require('./images/TB1Q1Msh3vD8KJjy0FlXXagBFXa-12-18.png')}
        className={styles.up}
        alt=""
      />
    );

    return (
      <IceContainer className={styles.displayCardContainer}>
        <Row wrap>
          <Col xxs="24" s="12" l="6" className={styles.item}>
            <div className={styles.title}>
              昨日内容浏览次数
              <span className={styles.extraIcon}>
                <Balloon
                  trigger={
                    <img
                      src={require('./images/TB1mfqwXFuWBuNjSszbXXcS7FXa-36-36.png')}
                      alt=""
                      width="12"
                      height="12"
                    />
                  }
                  triggerType="hover"
                  closable={false}
                >
                  这里是数据说明
                </Balloon>
              </span>
            </div>
            <div className={styles.count}>
              46,657
            </div>
            <div className={styles.desc}>
              <span>较前日 {down} -200</span>
              <span style={{ marginLeft: 5 }}>近7天 {up} +100</span>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.item}>
            <div className={styles.title}>
              昨日账号主页浏览人数
              <span className={styles.extraIcon}>
                <Balloon
                  trigger={
                    <img
                      src={require('./images/TB1mfqwXFuWBuNjSszbXXcS7FXa-36-36.png')}
                      alt=""
                      width="12"
                      height="12"
                    />
                  }
                  triggerType="hover"
                  closable={false}
                >
                  这里是数据说明
                </Balloon>
              </span>
            </div>
            <div className={styles.count}>
              533
            </div>
            <div className={styles.desc}>
              <span>较前日 {down} -200</span>
              <span style={{ marginLeft: 5 }}>近7天 {up} +100</span>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.item}>
            <div className={styles.title}>
              昨日活跃粉丝数
              <span className={styles.extraIcon}>
                <Balloon
                  trigger={
                    <img
                      src={require('./images/TB1mfqwXFuWBuNjSszbXXcS7FXa-36-36.png')}
                      alt=""
                      width="12"
                      height="12"
                    />
                  }
                  triggerType="hover"
                  closable={false}
                >
                  这里是数据说明
                </Balloon>
              </span>
            </div>
            <div className={styles.count}>
              2233
            </div>
            <div className={styles.desc}>
              <span>较前日 {down} -200</span>
              <span style={{ marginLeft: 5 }}>近7天 {up} +100</span>
            </div>
          </Col>
          <Col xxs="24" s="12" l="6" className={styles.item}>
            <div className={styles.title}>
              昨日粉丝数
              <span className={styles.extraIcon}>
                <Balloon
                  trigger={
                    <img
                      src={require('./images/TB1mfqwXFuWBuNjSszbXXcS7FXa-36-36.png')}
                      alt=""
                      width="12"
                      height="12"
                    />
                  }
                  triggerType="hover"
                  closable={false}
                >
                  这里是数据说明
                </Balloon>
              </span>
            </div>
            <div className={styles.count}>
              23,333
            </div>
            <div className={styles.desc}>
              <span>较前日 {down} -200</span>
              <span style={{ marginLeft: 5 }}>近7天 {up} +100</span>
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

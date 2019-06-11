import React, { Component } from 'react';
import { Button } from '@alifd/next';
import './LandingIntroBanner.scss';
import styles from './index.module.scss';
// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage = require('./images/TB1j9kWgvDH8KJjy1XcXXcpdXXa-1680-870.jpg');

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 登录介绍页面默认撑满一屏高度
    return (
      <div className="landing-intro-banner-wrapper">
        <div className={styles.landingIntro}>
          <div
            className={styles.landingIntroBackground}
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          <div
            // className="landing-intro-banner-content-wrapper"
            className={`${styles.contentWrapper} landing-intro-banner-content-wrapper`}
          >
            <div>
              <h2 className={styles.title}>
                更快，更优，更 Cool !<br />欢迎使用 ICE
              </h2>
              <div className={styles.buttons}>
                <a href="#">
                  <Button
                    className={styles.buttonColor}
                    type="primary"
                    size="large"
                    ghost
                  >
                    查看帮助
                  </Button>
                </a>
                <a href="#">
                  <Button
                    className={styles.buttonPadding}
                    type="primary"
                    size="large"
                  >
                    立即使用
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


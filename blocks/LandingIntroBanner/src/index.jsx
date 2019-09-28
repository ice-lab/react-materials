import React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';
// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage = require('./images/TB1j9kWgvDH8KJjy1XcXXcpdXXa-1680-870.jpg');

export default function Index() {
  return (
    <div>
      <div className={styles.landingIntro}>
        <div
          className={styles.landingIntroBackground}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div
          // className="landing-intro-banner-content-wrapper"
          className={styles.contentWrapper}
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

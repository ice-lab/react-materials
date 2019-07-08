import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Footer() {
  return (
    <div className={styles.footer}>
      <IceContainer>
        <Row wrap className={styles.content}>
          <Col xxs={24} m={6}>
            <h2 className={styles.logo}>LOGO</h2>
          </Col>
          <Col xxs={24} m={12}>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="/">
                  首页
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="/">
                  联系
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="/">
                  条款
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="/">
                  关于
                </a>
              </li>
            </ul>
          </Col>

          <Col xxs={24} m={6} className={styles.share}>
            <img
              className={styles.shareIcon}
              src={require('./images/TB1JkgmjnnI8KJjy0FfXXcdoVXa-60-48.png')}
              alt=""
            />
            <img
              className={styles.weChart}
              src={require('./images/TB1hEz2jf6H8KJjy0FjXXaXepXa-60-48.png')}
              alt=""
            />
          </Col>
          <p className={styles.copyRight}> © 2017 Taobao FED</p>
        </Row>
      </IceContainer>
    </div>
  );
}

import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function FooterInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Row wrap gutter="20">
          <Col xxs="24" s="8" l="8">
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>产品介绍</h2>
              <ul className={styles.nav}>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    组件
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    模块
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xxs="24" s="8" l="8">
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>合作伙伴</h2>
              <ul className={styles.nav}>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    淘宝
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    天猫
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xxs="24" s="8" l="8">
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>关注我们</h2>
              <ul className={styles.nav}>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    新浪微博
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    微信公众号
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <p className={styles.copyRight}>© 2017 Taobao FED</p>
    </div>
  );
}

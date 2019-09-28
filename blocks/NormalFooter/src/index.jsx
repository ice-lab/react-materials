import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function NormalFooter() {
  return (
    <div className="normal-footer">
      <IceContainer>
        <Row wrap className={styles.content}>
          <Col l="4" xxs="24">
            <a href="#" className={styles.brand}>
              <img
                src={require('./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png')}
                alt=""
                className={styles.logo}
              />
            </a>
          </Col>
          <Col l="16" xxs="24">
            <div className={styles.pullCenter }>
              <a href="#" className={styles.navLink}>
                Home
              </a>
              <a href="#" className={styles.navLink}>
                Shop
              </a>
              <a href="#" className={styles.navLink}>
                Blog
              </a>
              <a href="#" className={styles.navLink}>
                Service
              </a>
              <a href="#" className={styles.navLink}>
                About
              </a>
              <a href="#" style={{marginRight: 0 }} className={styles.navLink}>
                Contact
              </a>
            </div>
          </Col>
          <Col l="4" xxs="24">
            <div className={styles.pullRight}>
              <a href="#">
                <img
                  src={require('./images/TB1JkgmjnnI8KJjy0FfXXcdoVXa-60-48.png')}
                  alt=""
                  style={{marginRight: '16px'}} className={styles.socialImg}
                />
              </a>
              <a href="#">
                <img
                  src={require('./images/TB1hEz2jf6H8KJjy0FjXXaXepXa-60-48.png')}
                  alt=""
                  className={styles.socialImg}
                />
              </a>
            </div>
          </Col>
        </Row>
        <div className={styles.line} />
        <div className={styles.copyright}>
          © Copyright 2018. All rights reserved.
        </div>
      </IceContainer>
    </div>
  );
}

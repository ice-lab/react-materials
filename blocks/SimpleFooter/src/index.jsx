import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function SimpleFooter() {
  return (
    <div className="simple-footer">
      <IceContainer>
        <Row wrap className={styles.content}>
          <Col l="4" xxs="24">
            <a href="#" style={styles.brand}>
              <img
                src={require('./images/TB1saOBbYGYBuNjy0FoXXciBFXa-218-58.png')}
                alt=""
                className={styles.logo}
              />
            </a>
          </Col>
          <Col l="20" xxs="24">
            <div className={styles.nav}>
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
              <a href="#" className= {`${styles.navLink} ${styles.navLinks}`} >
                Contact
              </a>
            </div>
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}

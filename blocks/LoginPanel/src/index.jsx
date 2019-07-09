import React from 'react';
import { Grid } from '@alifd/next';
import LoginIntro from './LoginIntro';
import LoginForm from './LoginForm';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <div className={styles.container}>
      <Row wrap className={styles.row}>
        <Col l="16" className={styles.col}>
          <LoginIntro />
        </Col>
        <Col l="8" className={styles.col}>
          <div className={styles.content}>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </div>
  );
}

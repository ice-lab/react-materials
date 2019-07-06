import React from 'react';
import { Grid } from '@alifd/next';
import LoginIntro from './LoginIntro';
import CustomForm from './CustomForm';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <div className={styles.container}>
      <Row wrap>
        <Col l="12">
          <LoginIntro />
        </Col>
        <Col l="12">
          <div className={styles.content}>
            <CustomForm />
          </div>
        </Col>
      </Row>
    </div>
  );
}

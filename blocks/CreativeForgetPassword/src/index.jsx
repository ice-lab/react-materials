import React from 'react';
import { Grid } from '@alifd/next';
import ForgetPasswordIntro from './ForgetPasswordIntro';
import ForgetPasswordForm from './ForgetPasswordForm';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <div className={styles.container}>
      <Row wrap>
        <Col l="12">
          <ForgetPasswordIntro />
        </Col>
        <Col l="12">
          <div className={styles.content}>
            <ForgetPasswordForm />
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <IceContainer title="项目进度">
      <Row wrap>
        <Col xxs="12" s="6" l="6">
          <div className={styles.item}>
            <Progress
              percent={10}
              shape="circle"
              state="error"
              size="large"
            />
            <h6 className={styles.title}>项目A</h6>
          </div>
        </Col>
        <Col xxs="12" s="6" l="6">
          <div className={styles.item}>
            <Progress percent={50} shape="circle" size="large" />
            <h6 className={styles.title}>项目B</h6>
          </div>
        </Col>
        <Col xxs="12" s="6" l="6">
          <div className={styles.item}>
            <Progress percent={50} shape="circle" size="large" />
            <h6 className={styles.title}>项目C</h6>
          </div>
        </Col>
        <Col xxs="12" s="6" l="6">
          <div className={styles.item}>
            <Progress
              percent={100}
              shape="circle"
              state="success"
              size="large"
            />
            <h6 className={styles.title}>项目D</h6>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

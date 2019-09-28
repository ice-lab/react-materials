import React from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
export default function CircleProgress() {
  return (
    <Row wrap gutter="20">
      <Col xxs="12" s="12" l="8">
        <IceContainer>
          <div className={styles.item}>
            <Progress
              percent={10}
              shape="circle"
              state="error"
              size="large"
            />
            <h6 className={styles.title}>设备 A</h6>
          </div>
        </IceContainer>
      </Col>

      <Col xxs="12" s="12" l="8">
        <IceContainer>
          <div className={styles.item}>
            <Progress percent={50} shape="circle" size="large" />
            <h6 className={styles.title}>设备 B</h6>
          </div>
        </IceContainer>
      </Col>

      <Col xxs="12" s="12" l="8">
        <IceContainer>
          <div className={styles.item}>
            <Progress
              percent={100}
              shape="circle"
              state="success"
              size="large"
            />
            <h6 className={styles.title}>设备 C</h6>
          </div>
        </IceContainer>
      </Col>
    </Row>
  );
}

import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Overview() {
  return (
    <IceContainer>
      <Row wrap>
        <Col xxs="12" s="12" l="6" className={styles.textCardItem}>
          <div className={styles.textCardSubtitle}>我的待办</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>8</span>
            个任务
          </div>
        </Col>

        <Col xxs="12" s="12" l="6" className={styles.textCardItem}>
          <div className={styles.textCardSubtitle}>对接设备时间</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>32</span>
            分钟
          </div>
        </Col>

        <Col xxs="12" s="12" l="6" className={styles.textCardItem}>
          <div className={styles.textCardSubtitle}>本周销售时间</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>32</span>
            分钟
          </div>
        </Col>

        <Col
          xxs="12"
          s="12"
          l="6"
          className={styles.hb}
        >
          <div className={styles.textCardSubtitle}>本周销售量</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>23</span>
            个任务
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

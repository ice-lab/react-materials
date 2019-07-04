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
          </div>
        </Col>

        <Col xxs="12" s="12" l="6" className={styles.textCardItem}>
          <div className={styles.textCardSubtitle}>待审批</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>32</span>
          </div>
        </Col>

        <Col xxs="12" s="12" l="6" className={styles.textCardItem}>
          <div className={styles.textCardSubtitle}>待处理</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>16</span>
          </div>
        </Col>

        <Col
          xxs="12"
          s="12"
          l="6"
          className={styles.textCardItemr}
        >
          <div className={styles.textCardSubtitle}>待回复</div>
          <div className={styles.textCardTitle}>
            <span className={styles.textCardNumber}>23</span>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

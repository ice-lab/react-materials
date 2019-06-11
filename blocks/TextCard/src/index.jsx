import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class TextCard extends Component {
  static displayName = 'TextCard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Row wrap>
          <Col xxs="12" s="12" l="8" className={styles.textCardItem}>
            <div className={styles.textCardSubtitle}>我的待办</div>
            <div className={styles.textCardTitle}>
              <span className={styles.textCardNumber}>
                8
              </span>个任务
            </div>
          </Col>

          <Col xxs="12" s="12" l="8" className={styles.textCardItem}>
            <div className={styles.textCardSubtitle}>本周任务平均处理时间</div>
            <div className={styles.textCardTitle}>
              <span className={styles.textCardNumber}>
                32
              </span>分钟
            </div>
          </Col>

          <Col
            xxs="12"
            s="12"
            l="8"
            className={styles.textCardItem1}
          >
            <div className={styles.textCardSubtitle}>本周完成任务数</div>
            <div className={styles.textCardTitle}>
              <span className={styles.textCardNumber}>
                23
              </span>个任务
            </div>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function NoticeSummary() {
  return (
    <Row className={styles.noticeContainer}>
      <Col span="24">
        <div className={styles.noticeText}>
          该报价为官方活动的关联报价，请查看详情后下单购买
        </div>
        <div className={styles.noticeBody}>
          <img
            src={require('./images/banner.png')}
            alt=""
            className={styles.noticeImg}
          />
          <div className={styles.noticeContent}>
            <h3 className={styles.noticeTitle}>
              标题摘要
              <a href="#" className={styles.link}>
                查看详情{' '}
                <img
                  src={require('./images/arrow.png')}
                  className={styles.arrowIcon}
                  alt=""
                />
              </a>
            </h3>
            <div className={styles.noticeItems}>
              <div className={styles.noticeItem}>
                <span className={styles.label}>截止日期：</span>
                <span className={styles.value}>2018-07-05</span>
              </div>
              <div className={styles.noticeItem}>
                <span className={styles.label}>发起人：</span>
                <span className={styles.value}>淘小宝</span>
              </div>
              <div className={styles.noticeItem}>
                <span className={styles.label}>内容类型：</span>
                <span className={styles.value}>视频</span>
              </div>
              <div className={styles.noticeItem}>
                <span className={styles.label}>
                  参与创作者 <strong className={styles.count}>10</strong>
                  个，参与商家 <strong className={styles.count}>8</strong>个
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

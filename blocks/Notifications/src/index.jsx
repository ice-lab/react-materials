import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Notifications() {
  return (
    <IceContainer title="重要提醒">
      <Row wrap>
        <Col l="12" xxs="24">
          <div className={styles.noticeItem}>
            <div className={styles.noticeItemTitle}>订单相关</div>
            <div className={styles.noticeItemBody}>
              <div className={styles.bodyItem}>
                待发货订单：<a href="#">100</a>
              </div>
              <div className={styles.bodyItem}>
                待处理退款：<a href="#">0</a>
              </div>
            </div>
          </div>
        </Col>

        <Col l="12" xxs="24">
          <div className={styles.noticeItem}>
            <div className={styles.noticeItemTitle}>物流信息</div>
            <div className={styles.noticeItemBody}>
              <div className={styles.bodyItem}>
                已完成：<a href="#">100</a>
              </div>
              <div className={styles.bodyItem}>
                派送中：<a href="#">0</a>
              </div>
              <div className={styles.bodyItem}>
                退货中：<a href="#">0</a>
              </div>
            </div>
          </div>
        </Col>

        <Col l="12" xxs="24">
          <div className={styles.noticeItem}>
            <div className={styles.noticeItemTitle}>商品相关</div>
            <div className={styles.noticeItemBody}>
              <div className={styles.bodyItem}>
                门店在售：<a href="#">100</a>
              </div>
              <div className={styles.bodyItem}>
                门店售罄：<a href="#">0</a>
              </div>
              <div className={styles.bodyItem}>
                库存预警：<a href="#">0</a>
              </div>
              <div className={styles.bodyItem}>
                网店在售：<a href="#">0</a>
              </div>
              <div className={styles.bodyItem}>
                网店售罄：<a href="#">0</a>
              </div>
            </div>
          </div>
        </Col>

        <Col l="12" xxs="24">
          <div className={styles.noticeItem}>
            <div className={styles.noticeItemTitle}>通知消息</div>
            <div className={styles.noticeItemBody}>
              <div className={styles.bodyItem}>
                未读客户消息：<a href="#">100</a>
              </div>
              <div className={styles.bodyItem}>
                未读通知：<a href="#">0</a>
              </div>
              <div className={styles.bodyItem}>
                系统通知：<a href="#">0</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

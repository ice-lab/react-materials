import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function OverviewCard() {
  return (
    <Row wrap gutter={20}>
      <Col xxs="24" l="12">
        <IceContainer>
          <div className={styles.iconWrap}>
            <Icon
              size="large"
              type="elipsis"
              className={styles.icon}
            />
          </div>
          <Row className={styles.content}>
            <Col l="12" className={styles.line}>
              <div className={`${styles.item} ${styles.leftItem}`}>
                <span className={styles.count}>16</span>
                <span className={styles.label}>所有项目</span>
                
              </div>
            </Col>
            <Col l="12">
              <div className={`${styles.item} ${styles.rightItem}`}>
                <span className={styles.count}>2</span>
                <span className={styles.label}>活跃项目</span>
              </div>
            </Col>
          </Row>
        </IceContainer>
      </Col>
      <Col xxs="24" l="12">
        <IceContainer>
          <div className={styles.iconWrap}>
            <Icon
              size="large"
              type="account"
              className={ `${styles.icon} ${styles.iconRight}`}
            />
          </div>
          <Row className={styles.content}>
            <Col l="12" className={styles.line}>
              <div className={`${styles.item} ${styles.leftItem}`}>
                <span className={`${styles.count}  ${styles.countColor}`}>
                  63250
                </span>
                <span className={styles.label}>注册用户</span>
              </div>
            </Col>
            <Col l="12">
              <div className={`${styles.item} ${styles.rightItem}`}>
                <span className={`${styles.count}  ${styles.countOne}`}>97%</span>
                <span className={styles.label}>活跃用户</span>
              </div>
            </Col>
          </Row>
        </IceContainer>
      </Col>
    </Row>
  );
}

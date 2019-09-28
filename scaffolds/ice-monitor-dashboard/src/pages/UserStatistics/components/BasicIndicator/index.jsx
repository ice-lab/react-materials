import React from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Grid, Icon } from '@alifd/next';

import ContainerTitle from '@/components/ContainerTitle';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function BasicIndicator() {
  const down = <Icon type="descending" size="xs" className={styles.downIcon} />;
  const up = <Icon type="ascending" size="xs" className={styles.upIcon} />;

  return (
    <IceContainer className={styles.container}>
      <ContainerTitle title="基本指标" />
      <Row wrap>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            新用户
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                01-03 首次访问的用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>1,225</div>
          <div className={styles.desc}>
            <span>周同比 {down} 10.12%</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            老用户
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                01-03 非首次访问的用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>2,349</div>
          <div className={styles.desc}>
            <span>周同比 {down} 23.40%</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            7日活跃用户
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                12-31 ~ 01-03 访问用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>23,456</div>
          <div className={styles.desc}>
            <span>环比 {up} 67.08%</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            30日活跃用户
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                12-05 ~ 01-03 访问用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>16,678</div>
          <div className={styles.desc}>
            <span>环比 {up} 65.43%</span>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

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
            昨日 UV
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                昨日 01-03 访问的用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>6,657</div>
          <div className={styles.desc}>
            <span>较前日 {down} -200</span>
            <span className={styles.sevenDay}>近7天 {up} +100</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            昨日 PV
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                昨日 01-03 访问的次数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>30,533</div>
          <div className={styles.desc}>
            <span>较前日 {down} -200</span>
            <span className={{ marginLeft: '15px' }}>近7天 {up} +100</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            本周截至昨日活跃用户
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
          <div className={styles.count}>2,233</div>
          <div className={styles.desc}>
            <span>较前日 {down} -200</span>
            <span className={styles.sevenDay}>近7天 {up} +100</span>
          </div>
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            本月截至昨日活跃用户
            <span className={styles.extraIcon}>
              <Balloon
                trigger={<Icon type="help" size="xs" />}
                triggerType="hover"
                closable={false}
              >
                01-01 ~ 01-03 访问用户数
              </Balloon>
            </span>
          </div>
          <div className={styles.count}>6,691</div>
          <div className={styles.desc}>
            <span>较前日 {down} -200</span>
            <span className={styles.sevenDay}>近7天 {up} +100</span>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
}

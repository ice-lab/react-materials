import React from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Grid, Icon } from '@alifd/next';

import styles from './index.module.scss';

const { Row, Col } = Grid;

const mockData = [
  {
    icon: 'atm',
    title: '最新发布活动数',
    desc: '这里是一些说明',
    count: '3,341',
    total: '232,434',
    period: '26%',
  },
  {
    icon: 'upload',
    title: '新增会员数',
    desc: '这里是一些说明',
    count: '882',
    total: '232,349',
    period: '45%',
  },
  {
    icon: 'account',
    title: '新增用户数',
    desc: '这里是一些说明',
    count: '2,823',
    total: '483,475',
    period: '87%',
  },
];

export default function Overview() {
  return (
    <IceContainer className={styles.container}>
      <Row wrap>
        {mockData.map((item, index) => {
          return (
            <Col key={index} l="8" className={styles.item}>
              <div className={styles.itemIcon}>
                <Icon size="xl" type={item.icon} />
              </div>
              <div className={styles.body}>
                <div className={styles.title}>
                  {item.title}
                  <span className={styles.extraIcon}>
                    <Balloon
                      trigger={<Icon type="help" size="xs" />}
                      triggerType="hover"
                      closable={false}
                      align="t"
                    >
                      {item.desc}
                    </Balloon>
                  </span>
                </div>
                <div className={styles.count}>{item.count}</div>
                <div className={styles.data}>
                  <span>累计 {item.total}</span>
                  <span className={styles.period}>周同比 {item.period}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}

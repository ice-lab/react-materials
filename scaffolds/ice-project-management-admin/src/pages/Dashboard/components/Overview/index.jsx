import React from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;

const navigation = [
  {
    title: '今日工作',
    color: '#58ca9a',
    count: '160',
  },
  {
    title: '今日任务',
    color: '#ee706d',
    count: '30',
  },
  {
    title: '已完成任务',
    color: '#f7da47',
    count: '120',
  },
  {
    title: '已归档任务',
    color: '#447eff',
    count: '69',
  },
];

export default function Overview() {
  return (
    <Row wrap gutter={20}>
      {navigation.map((item, index) => {
        return (
          <Col xxs="12" l="6" key={index}>
            <IceContainer
              style={{ background: item.color }}
              className={styles.IceContainer}
            >
              <div className={styles.navItem}>
                <p className={styles.count}>{item.count}</p>
                <h5 className={styles.title}>{item.title}</h5>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}

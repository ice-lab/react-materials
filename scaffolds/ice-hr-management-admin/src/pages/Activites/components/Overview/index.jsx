import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const MOCK_DATA = [
  {
    title: '动态',
    value: '28',
  },
  {
    title: '消息',
    value: '11',
  },
  {
    title: '立项',
    value: '13',
  },
  {
    title: '转正',
    value: '8',
  },
  {
    title: '入职',
    value: '5',
  },
  {
    title: '离职',
    value: '2',
  },
];

export default function Overview() {
  return (
    <IceContainer>
      <Row wrap>
        {MOCK_DATA.map((item, index) => {
          return (
            <Col key={index} xxs="12" s="12" l="4">
              <div className={styles.item}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.value}>{item.value}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}

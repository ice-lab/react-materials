import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const mockData = [
  {
    name: '下单笔数',
    value: '349,231',
  },
  {
    name: '待付款',
    value: '123,789',
  },
  {
    name: '待发货',
    value: '3,678',
  },
  {
    name: '待退货',
    value: '12,987',
  },
  {
    name: '月收入',
    value: '22,888',
  },
  {
    name: '总收入',
    value: '867,543',
  },
];

export default function Overview() {
  return (
    <IceContainer>
      <Row>
        {mockData.map((item, index) => {
          return (
            <Col l="4" key={index}>
              <div className={styles.box}>
                <div className={styles.name}>
                  {item.name}
                </div>
                <div className={styles.value}>
                  {item.value}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}

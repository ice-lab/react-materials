import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const mockData = [
  {
    name: '任务数',
    value: '3,456',
  },
  {
    name: '表数',
    value: '23,789',
  },
  {
    name: '应用数',
    value: '678',
  },
  {
    name: '开发者',
    value: '18',
  },
];

export default function Overview() {
  return (
    <IceContainer>
      <Row>
        {mockData.map((item, index) => {
          return (
            <Col l="6" key={index}>
              <div className={styles.box}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.value}>{item.value}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}



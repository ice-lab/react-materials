import React from 'react';
import { Grid, Progress } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    percent: '100',
    title: '所有任务',
    value: '3841',
  },
  {
    percent: '60',
    title: '未解决',
    value: '2931',
  },
  {
    percent: '10',
    title: '处理中',
    value: '384',
  },
  {
    percent: '30',
    title: '已解决',
    value: '2398',
  },
];

export default function OverviewPieChart() {
  return (
    <Row gutter={20}>
      {mockData.map((item, index) => {
        return (
          <Col xxs="24" l="6" key={index}>
            <IceContainer className={styles.container}>
              <Progress percent={item.percent} state="error" shape="circle" />
              <div className={styles.content}>
                <p className={styles.value}>{item.value}</p>
                <h4 className={styles.title}>{item.title}</h4>
              </div>
            </IceContainer>
          </Col>
        );
      })}
    </Row>
  );
}

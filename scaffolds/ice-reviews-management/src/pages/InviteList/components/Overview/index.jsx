import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const mockData = [
  {
    title: '总计邀请(个)',
    value: '187',
  },
  {
    title: '正在进行中(个)',
    value: '62',
  },
  {
    title: '已完成(个)',
    value: '23',
  },
  {
    title: '完成平均时长(天)',
    value: '39',
  },
  {
    title: '参与成员(人)',
    value: '96',
  },
];

export default function Overview() {
  return (
    <IceContainer className={styles.container}>
      <Row>
        <Col l="4">
          <div className={styles.item}>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/heTdoQXAHjxNGiLSUkYA.svg"
              alt=""
            />
          </div>
        </Col>
        {mockData.map((item, index) => {
          return (
            <Col l="4" key={index}>
              <div className={styles.item}>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemValue}>{item.value}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
}

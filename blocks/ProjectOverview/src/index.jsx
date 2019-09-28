import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import ContainerTitle from './ContainerTitle';
import styles from  './index.module.scss'

const { Row, Col } = Grid;

const mockData = [
  {
    title: '计划中(个)',
    value: '87',
  },
  {
    title: '正在进行中(个)',
    value: '62',
  },
  {
    title: '已完成(个)',
    value: '123',
  },
  {
    title: '完成平均时长(天)',
    value: '39',
  },
  {
    title: '参与成员(人)',
    value: '18',
  },
];

export default function Overview() {
  return (
    <div>
      <ContainerTitle title="本周概览" />
      <IceContainer>
        <Row>
          <Col l="4">
            <div className={styles.item}>
              <img src={require('./images/box.svg')} alt="" />
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
    </div>
  );
}

import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid } from '@alifd/next';

import styles from './index.module.scss'

const { Row, Col } = Grid;

const MOCK_DATA = [
  {
    percent: '60',
    state: '',
    title: '正式员工',
  },
  {
    percent: '20',
    state: 'success',
    title: '实习员工',
  },
  {
    percent: '5',
    state: 'error',
    title: '试用期员工',
  },
  {
    percent: '15',
    state: 'success',
    title: '外包员工',
  },
];

export default class CircleProgress extends Component {
  render() {
    return (
      <IceContainer>
        <Row wrap gutter="20">
          {MOCK_DATA.map((item, index) => {
            return (
              <Col xxs="12" s="12" l="6" key={index}>
                <div className={styles.item}>
                  {item.state ? (
                    <Progress
                      percent={item.percent}
                      shape="circle"
                      state={item.state}
                      size="large"
                    />
                  ) : (
                    <Progress
                      percent={item.percent}
                      shape="circle"
                      size="large"
                    />
                  )}
                  <h6 className={styles.title}>{item.title}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}

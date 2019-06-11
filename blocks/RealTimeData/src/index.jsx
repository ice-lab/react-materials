import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from  './index.modules.scss'
import SplineChart from './SplineChart';

const { Row, Col } = Grid;

const totalData = [
  {
    label: '构建量',
    value: '55464',
  },
  {
    label: '仓库',
    value: '24717',
  },
  {
    label: '用户',
    value: '4274',
  },
  {
    label: '构建器',
    value: '689',
  },
];

const todayData = [
  {
    label: '构建量',
    value: '7995',
    img: require('./images/count.png'),
  },
  {
    label: '活跃仓库',
    value: '1002',
    img: require('./images/repo.png'),
  },
  {
    label: '活跃用户',
    value: '735',
    img: require('./images/user.png'),
  },
  {
    label: '活跃构建器',
    value: '55',
    img: require('./images/builder.png'),
  },
];

export default class RealTimeData extends Component {
  static displayName = 'RealTimeData';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row gutter="20">
        <Col l="12">
          <IceContainer>
            <h4 className={styles.cardTitle}>实时构建数</h4>
            <SplineChart />
          </IceContainer>
        </Col>
        <Col l="12">
          <IceContainer>
            <h4 className={styles.cardTitle}>所有数据</h4>
            <Row wrap gutter="10">
              {totalData.map((item, index) => {
                return (
                  <Col key={index}>
                    <div className={styles.totalCard}>
                      <div className={styles.label}>{item.label}</div>
                      <div className={styles.value}>{item.value}</div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </IceContainer>
          <IceContainer>
            <h4 className={styles.cardTitle}>今日数据</h4>
            <Row wrap gutter="10">
              {todayData.map((item, index) => {
                return (
                  <Col key={index}>
                    <div className={styles.todayCard}>
                      <img src={item.img} alt="" className={styles.todayCardIcon} />
                      <div>
                        <div className={styles.label}>{item.label}</div>
                        <div className={styles.value}>{item.value}</div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

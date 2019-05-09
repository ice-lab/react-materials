import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import PieChart from './PieChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class OverviewInfo extends Component {
  static displayName = 'OverviewInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap gutter={20}>
        <Col l="12">
          <IceContainer className={styles.container}>
            <h4 className={styles.title}>应用版本详细信息</h4>
            <ul className={styles.summary}>
              <li className={styles.item}>
                <span className={styles.label}>应用名称：</span>
                <span className={styles.value}>
                  手机淘宝 iOS 客户端 0.0.1 版本监控
                </span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>当前版本：</span>
                <span className={styles.value}>0.0.2</span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>对比版本：</span>
                <span className={styles.value}>0.0.1</span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>App ID：</span>
                <span className={styles.value}>000001</span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>创建者：</span>
                <span className={styles.value}>淘小宝</span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>创建时间：</span>
                <span className={styles.value}>2018-08-29 11:28:23</span>
              </li>
            </ul>
          </IceContainer>
        </Col>
        <Col l="12">
          <IceContainer className={styles.container}>
            <h4 className={styles.title}>埋点统计</h4>
            <PieChart />
          </IceContainer>
        </Col>
      </Row>
    );
  }
}



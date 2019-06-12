import React, { Component } from 'react';
import { Icon, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const getData = () => {
  return Array.from({ length: 12 }).map((item, index) => {
    return {
      title: '淘宝首页监控',
      appVersion: `0.0.${index}`,
      error: `${index}`,
      dau: `1000${index}`,
      compareVersion: `0.0.${index}`,
      newTrack: `${index + 1}1`,
      omitTrack: 0,
    };
  });
};

export default class MultiCard extends Component {
  static displayName = 'MultiCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = getData();
    return (
      <div className={styles.container}>
        <Row wrap gutter="20">
          {data.map((item, index) => {
            return (
              <Col l="6" key={index}>
                <div className={styles.card}>
                  <div className={styles.head}>
                    <h4 className={styles.title}>
                      {index === 0 ? item.title : item.appVersion}
                    </h4>
                  </div>
                  <Row wrap className={styles.body}>
                    <Col l="12" className={styles.info}>
                      埋点错误数：
                      {item.error}
                    </Col>
                    <Col l="12" className={styles.info}>
                      今日 DAU：
                      {item.dau}
                    </Col>
                    <Col l="12" className={styles.info}>
                      新增埋点数：
                      {item.newTrack}
                    </Col>
                    <Col l="12" className={styles.info}>
                      遗漏埋点数：
                      {item.omitTrack}
                    </Col>
                  </Row>
                  <Row className={styles.footer}>
                    <Col l="12">
                      <a className={styles.link}>
                        <Icon type="set" size="small" className={styles.icon} />
                        告警配置
                      </a>
                    </Col>
                    <Col l="12">
                      <a className={styles.link}>
                        <Icon
                          type="attachment"
                          size="small"
                          className={styles.icon}
                        />
                        查看详情
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const mockData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      name: '@ice/builder-miniapp',
      value: index + 1,
    };
  });
};

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <h4 className={styles.cardTitle}>构建器更新动态</h4>
        <Row gutter="10" className={styles.rowOverFlow}>
          {mockData().map((item, index) => {
            return (
              <Col l="4" key={index}>
                <a href="#">
                  <div className={styles.miniCard}>
                    <div className={styles.label}>{item.name}</div>
                    <div className={styles.value}>
                      在<span className={styles.time}>{item.value} 小时前</span>
                      更新了版本
                    </div>
                    <Icon
                      type="arrow-right"
                      size="xs"
                      className={styles.arrowIcon}
                    />
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}



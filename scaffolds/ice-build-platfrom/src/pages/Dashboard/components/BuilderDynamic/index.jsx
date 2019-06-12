import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class BuilderDynamic extends Component {
  static displayName = 'BuilderDynamic';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
      {
        name: '@ice/builder-miniapp',
        value: '5',
      },
    ];
    return (
      <IceContainer>
        <h4 className={styles.cardTitle}>构建器更新动态</h4>
        <Row gutter="10" style={{ overflow: 'scroll' }}>
          {data.map((item, index) => {
            return (
              <Col l="4" key={index} style={{ background: 'red' }}>
                <div className={styles.miniCard}>
                  <div className={styles.label}>{item.name}</div>
                  <div className={styles.value}>
                    在<span className={styles.time}>{item.value}小时前</span>
                    更新了版本
                  </div>
                  <Icon type="arrow-right" size="xs" className={styles.arrowIcon} />
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}



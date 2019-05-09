import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const getData = () => {
  return Array.from({ length: 4 }).map((item, index) => {
    return {
      title: `神经网络模型 0${index + 1}`,
      body: [
        {
          label: '当前版本',
          value: `0.0.${index + 1}`,
        },
        {
          label: '调用次数',
          value: `123,23${index}`,
        },
        {
          label: '场景类型',
          value: '回归',
        },
        {
          label: '算法实现',
          value: '决策树',
        },
        {
          label: '更新时间',
          value: '2018-09-20',
        },
        {
          label: '发布人',
          value: '淘小宝',
        },
        {
          label: '相关备注',
          value: '无',
        },
      ],
    };
  });
};

export default class ModelCards extends Component {
  static displayName = 'ModelCards';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mockData = getData();
    return (
      <Row wrap gutter="40" className={styles.row}>
        {mockData.map((data, index) => {
          return (
            <Col l="6" key={index}>
              <div className={styles.modelCards}>
                <div className={styles.head}>
                  <Icon type="electronics" className={styles.icon} /> {data.title}
                </div>
                <div className={styles.body}>
                  {data.body.map((item, key) => {
                    return (
                      <div className={styles.item} key={key}>
                        <span className={styles.label}>{item.label}：</span>
                        <span className={styles.value}>{item.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.footer}>
                  <a className={styles.lightBlue }>
                    调用示例
                  </a>
                  <a className={styles.green }>在线预测</a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}


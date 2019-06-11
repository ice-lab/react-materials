import React, { Component } from 'react';
import { Grid, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const mockData = [
  [
    { name: '集群数', value: '168' },
    { name: '机器数', value: '98,123' },
    { name: '总应用数', value: '25,987' },
    { name: '机器数', value: '12,345' },
  ],
  [
    { name: '数据表数', value: '681,987' },
    { name: '生产表', value: '98,123' },
    { name: '开发表', value: '25,987' },
    { name: '虚拟存储', value: '12,345' },
  ],
  [
    { name: '任务数', value: '168' },
    { name: '计算消耗', value: '98,555' },
    { name: '生成任务', value: '25,333' },
    { name: '开发任务', value: '12,222' },
  ],
  [
    { name: '总费用', value: '679万元' },
    { name: '计算费用', value: '231,12万元' },
    { name: '开发费用', value: '25,987万元' },
    { name: '存储费用', value: '12,345万元' },
  ],
];

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (value) => {
    console.log({ value });
  };

  render() {
    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.containerTitle}>概览</h4>
        <Row wrap gutter={20} className={styles.row}>
          {mockData.map((items, index) => {
            const borderNone =
              index === mockData.length - 1 ? styles.borderNone : {};
            return (
              <Col l="6" xs="12" xxs="24" key={index}>
                <div className={`${styles.box} ${borderNone}`}>
                  {items.map((item, key) => {
                    return (
                      <div className={styles.boxCell} key={key}>
                        <div className={styles.cellName}>{item.name}</div>
                        <div className={styles.cellValue}>{item.value}</div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}



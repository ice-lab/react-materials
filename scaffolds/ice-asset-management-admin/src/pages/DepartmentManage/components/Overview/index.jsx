import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const mockData = [
  {
    name: '总任务数',
    value: '23,456',
  },
  {
    name: '总表数',
    value: '123,789',
  },
  {
    name: '总应用数',
    value: '3,678',
  },
  {
    name: '开发者',
    value: '2,987',
  },
  {
    name: '前台导入表数',
    value: '45,888',
  },
  {
    name: '业务导出表数',
    value: '67,543',
  },
];

export default class Overview extends Component {
  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Row>
          {mockData.map((item, index) => {
            return (
              <Col l="4" key={index}>
                <div className={styles.box}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.value}>{item.value}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}


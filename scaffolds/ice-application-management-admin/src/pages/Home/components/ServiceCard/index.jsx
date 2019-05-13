import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss'

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return [
    {
      name: 'taobao-management',
      desc: '淘小宝管理后台',
      tag: '核心应用',
      qps: '5140.97/s',
      machine: 91,
    },
    {
      name: 'content-management',
      desc: '内容管理后台',
      qps: '5140.97/s',
      machine: 91,
    },
    // {
    //   name: 'seller-management',
    //   desc: '商家管理后台',
    //   tag: '核心应用',
    //   qps: '5140.97/s',
    //   machine: 91
    // }
  ];
};

export default class ServiceCard extends Component {
  static displayName = 'ServiceCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mockData = getData();
    return (
      <Row wrap gutter="20">
        {mockData.map((item, index) => {
          return (
            <Col l="12" key={index}>
              <IceContainer className={styles.container}>
                <a href="#/app" >
                  <div className={styles.body}>
                    <h5 className={styles.name}>{item.name}</h5>
                    <p className={styles.desc}>{item.desc}</p>
                    {item.tag ? <div className={styles.tag}>{item.tag}</div> : null}
                  </div>
                  <div className={styles.footer}>
                    <div href="#" className={styles.link}>
                      <span>QPS</span>
                      <span className={styles.left}>{item.qps}</span>
                    </div>
                    <div href="#" className={styles.link}>
                      <span>机器数</span>
                      <span className={styles.left}>{item.machine}</span>
                    </div>
                  </div>
                </a>
              </IceContainer>
            </Col>
          );
        })}
      </Row>
    );
  }
}

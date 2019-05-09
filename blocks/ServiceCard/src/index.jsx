import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 6 }).map(() => {
    return {
      name: '服务名称',
      desc: '这里是一段相关的服务简介，介绍产品的功能、特点',
      tag: '精选',
    };
  });
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
            <Col l="8" key={index}>
              <IceContainer className={styles.container}>
                <div className={styles.body}>
                  <h5 className={styles.name}>{item.name}</h5>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.tag}>{item.tag}</div>
                </div>
                <div className={styles.footer}>
                  <a href="#" className={`${styles.link} ${styles.line}`}>
                    <Icon type="office" size="small" className={styles.icon} />{' '}
                    文档帮助
                  </a>
                  <a href="#" className={styles.link}>
                    <Icon type="box" size="small" className={styles.icon} />
                    权限申请
                  </a>
                </div>
              </IceContainer>
            </Col>
          );
        })}
      </Row>
    );
  }
}


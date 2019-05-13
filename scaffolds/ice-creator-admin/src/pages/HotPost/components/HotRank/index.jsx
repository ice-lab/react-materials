import Container from '@icedesign/container';
import React, { Component } from 'react';
import { Grid, Pagination } from '@alifd/next';

import HotItem from './HotItem';
import styles from './index.module.scss';
const { Row, Col } = Grid;

function mockData(page = 1) {
  return Array.from({ length: 30 }).map((n, i) => {
    return {
      index: i + 1 + (page - 1) * 30,
      keyword: ['连衣裙', '情人节礼物', '七夕节', '男人装'][i % 4],
      total: 300 * (30 - i),
      percent: 100 - i * 2.8,
      url: '#',
    };
  });
}

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockData(1),
    };
  }

  handlePageChange = (page) => {
    this.setState({ dataSource: mockData(page) });
  };

  render() {
    return (
      <Container>
        <div className={styles.header}>
          <h3 className={styles.font}>
            粉丝热门关注点
          </h3>
          <span className={styles.spanFont}>
            每日计算分析近期粉丝行为，从而得出专注领域下粉丝热点综合指数排行
          </span>
        </div>

        <Row wrap>
          <Col className={styles.col }>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 === 0; // 前10个
              })
              .map((item, index) => {
                return <HotItem key={index} data={item} />;
              })}
          </Col>
          <Col className={styles.col }>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 === 1; // 前20个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
          <Col>
            {this.state.dataSource
              .filter((item, index) => {
                return Math.floor(index / 10) % 3 === 2; // 前30个
              })
              .map((item, key) => {
                return <HotItem key={key} data={item} />;
              })}
          </Col>
        </Row>
        <div className={styles.div}>
          <Pagination onChange={this.handlePageChange} />
        </div>
      </Container>
    );
  }
}



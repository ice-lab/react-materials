import Container from '@icedesign/container';
import React, { useState } from 'react';
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

export default function HotRank() {
  const [dataSource, setData] = useState(mockData(1));

  const handlePageChange = (page) => {
    setData(mockData(page));
  };

  return (
    <Container>
      <div className={styles.header}>
        <h3 style={{ fontSize: 16, color: '#333', margin: 0 }}>
          粉丝热门关注点
        </h3>
        <span style={{ fontSize: 12, color: '#999' }}>
          每日计算分析近期粉丝行为，从而得出专注领域下粉丝热点综合指数排行
        </span>
      </div>

      <Row wrap>
        <Col style={{ borderRight: '1px solid #eee' }}>
          {dataSource
            .filter((item, index) => {
              return parseInt(Math.floor(index / 10) % 3, 10) === 0; // 前10个
            })
            .map((item, index) => {
              return <HotItem key={index} data={item} />;
            })}
        </Col>
        <Col style={{ borderRight: '1px solid #eee' }}>
          {dataSource
            .filter((item, index) => {
              return parseInt(Math.floor(index / 10) % 3, 10) === 1; // 前20个
            })
            .map((item, key) => {
              return <HotItem key={key} data={item} />;
            })}
        </Col>
        <Col>
          {dataSource
            .filter((item, index) => {
              return parseInt(Math.floor(index / 10) % 3, 10) === 2; // 前30个
            })
            .map((item, key) => {
              return <HotItem key={key} data={item} />;
            })}
        </Col>
      </Row>
      <div style={{ textAlign: 'right', marginTop: 10 }}>
        <Pagination onChange={handlePageChange} />
      </div>
    </Container>
  );
}

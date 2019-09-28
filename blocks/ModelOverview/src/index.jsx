import React from 'react';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const mockData = [
  {
    symbolBgColor: '#6ccac9',
    symbol: 'set',
    count: '861',
    desc: '模型总数',
  },
  {
    symbolBgColor: '#ed6c5c',
    symbol: 'prompt',
    count: '83,495,050',
    desc: '近30天总调用量',
  },
  {
    symbolBgColor: '#f4d32f',
    symbol: 'atm',
    count: '348,065',
    desc: '近30天日均调用量',
  },
  {
    symbolBgColor: '#6ac8f3',
    symbol: 'account',
    count: '334,451',
    desc: '用户总数',
  },
];

export default function ModelOverview() {
  return (
    <Row gutter={20} wrap>
      {mockData.map((item, index) => {
        return (
          <Col xxs="24" xs="12" l="6" key={index}>
            <div className={styles.box}>
              <div
                style={{
                  background: `${item.symbolBgColor}`,
                }}
                className={styles.symbol}
              >
                <Icon size="xl" type={item.symbol} />
              </div>
              <div className={styles.value}>
                <div className={styles.count}>{item.count}</div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

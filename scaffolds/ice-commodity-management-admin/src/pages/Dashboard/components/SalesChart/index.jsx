import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import ColumnChart from './ColumnChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    title: '年度销售数',
    amount: '1,293',
    percent: '15%',
    increase: true,
    color: '#fff',
    borderColor: '#4FD4A4',
    background: '#1BC98E',
  },
  {
    title: '年度订单数',
    amount: '758',
    percent: '1.3%',
    increase: false,
    color: '#fff',
    borderColor: '#EB6C7A',
    background: '#E64758',
  },
  {
    title: '年度会员数',
    amount: '3,659',
    percent: '20%',
    increase: true,
    color: '#fff',
    borderColor: '#B29FFF',
    background: '#9F85FF',
  },
  {
    title: '年度总收入',
    amount: '298,234',
    percent: '12%',
    increase: false,
    color: '#fff',
    borderColor: '#E9E063',
    background: '#E5D936',
  },
];

export default class SalesChart extends Component {
  render() {
    return (
      <Row wrap gutter={20} style={{ marginBottom: '20px' }}>
        {mockData.map((item, index) => {
          return (
            <Col xxs="24" l="6" key={index}>
              <div className={styles.content}
              style = {{background: item.background}}>
                <div className={styles.summary}>
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.data}>
                    <h2 className={styles.amount}>{item.amount}</h2>
                    <div className={styles.percent}>
                      {item.percent}{' '}
                      <Icon
                        type={`arrow-${item.increase ? 'up' : 'down'}-filling`}
                        size="xs"
                        className={styles.arrowIcon}
                      />
                    </div>
                  </div>
                </div>
                <ColumnChart color="#fff" />
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}


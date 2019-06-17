import React, { Component } from 'react';
import { Grid, Icon } from '@alifd/next';
import ColumnChart from './ColumnChart';
import ContainerCard from '../../../../components/ContainerCard';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const mockData = [
  {
    title: '年度销售额',
    amount: '1,293',
    percent: '15%',
    increase: true,
    color: '#fff',
    background: '#447eff',
  },
  {
    title: '年度订单量',
    amount: '758',
    percent: '1.3%',
    increase: false,
    color: '#fff',
    background: '#58ca9a',
  },
  {
    title: '年度新增用户数',
    amount: '3,659',
    percent: '20%',
    increase: true,
    color: '#fff',
    background: '#f7da47',
  },
  {
    title: '年度新增会员数',
    amount: '298',
    percent: '12%',
    increase: false,
    color: '#fff',
    background: '#ee706d',
  },
];

export default class OverviewSatesChart extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row wrap gutter={20}>
          {mockData.map((item, index) => {
            return (
              <Col xxs="24" l="6" key={index}>
                <ContainerCard>
                  <div className={styles.summary}>
                    <p className={styles.title}>{item.title}</p>
                    <div className={styles.data}>
                      <h2 className={styles.amount}>{item.amount}</h2>
                      <div className={styles.percent}>
                        {item.percent}{' '}
                        <Icon
                          type={`arrow-${
                            item.increase ? 'up' : 'down'
                          }-filling`}
                          size="xs"
                          className={styles.arrowIcon}
                        />
                      </div>
                    </div>
                  </div>
                  <ColumnChart color={item.background} />
                </ContainerCard>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}



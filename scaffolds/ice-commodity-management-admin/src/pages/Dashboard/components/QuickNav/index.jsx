import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import { Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const MOCK_DATA = [
  {
    title: '资产管理',
    icon: 'cart',
    color: '#5e83fb',
    to: '/asset',
  },
  {
    title: '商品管理',
    icon: 'cart',
    color: '#f7da47',
    to: '/goods',
  },
  {
    title: '预约管理',
    icon: 'cart',
    color: '#ee706d',
    to: '/reserve',
  },
  {
    title: '订单管理',
    icon: 'cart',
    color: '#58ca9a',
    to: '/order',
  },
  {
    title: '会员管理',
    icon: 'cart',
    color: '#58ca9a',
    to: '/membership',
  },
  {
    title: '添加商品',
    icon: 'cart',
    color: '#447eff',
    to: '/add/goods',
  },
];

export default class QuickNav extends Component {
  render() {
    return (
      <IceContainer title="常用导航">
        <Row wrap gutter="20" style={{ marginBottom: '20px' }}>
          {MOCK_DATA.map((item, index) => {
            return (
              <Col xxs="12" s="12" l="8" key={index} className={styles.item}>
                <Link to={item.to} className={styles.link}>
                  <IceContainer
                    className={styles.card}
                    style= {{backgroundColor: item.color}}
                  >
                    <Icon type={item.icon} className={styles.icon} />
                    <div className={styles.title}>{item.title}</div>
                  </IceContainer>
                </Link>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}



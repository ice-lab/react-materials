import Container from '@icedesign/container';
import React, { Component } from 'react';
import styles from './index.module.scss';

class DataOverview extends Component {
  state = {
    dataSource: [
      {
        icon: require('./images/icon1.png'),
        title: '访客数',
        total: '567',
      },
      {
        icon: require('./images/icon2.png'),
        title: '浏览量',
        total: '80',
      },
      {
        icon: require('./images/icon3.png'),
        title: '商品曝光次数',
        total: '89万',
        yestodayTrend: 'increase',
        yestodayNumber: '700',
        weekTrend: 'decrease',
        weekNumber: '8000',
      },
      {
        icon: require('./images/icon4.png'),
        title: '商品浏览量',
        total: '28340',
      },
      {
        icon: require('./images/icon5.png'),
        title: '商品访客数',
        total: '20458',
      },
      {
        icon: require('./images/icon6.png'),
        title: '支付订单数',
        total: '2067',
      },
      {
        icon: require('./images/icon7.png'),
        title: '支付人数',
        total: '20123',
      },
    ],
  };

  render() {
    return (
      <Container className={styles.container}>
        {this.state.dataSource.map((data, index) => {
          return (
            <div key={index} className={styles.overviewItem}>
              <div className={styles.overviewItemIcon}>
                <img alt={data.title} src={data.icon} className={styles.icon} />
              </div>
              <div
                className={styles.nweIcon }
              >
                <div className={styles.overviewItemTitle}>{data.title}</div>
                <div className={styles.overviewItemTotal}>{data.total}</div>
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}



export default DataOverview;

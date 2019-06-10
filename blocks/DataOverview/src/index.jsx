import Container from '@icedesign/container';
import React, { Component } from 'react';
import styles from './index.module.scss';
class DataOverview extends Component {
  state = {
    dataSource: [
      {
        icon: require('./images/icon1.png'),
        title: '昨日内容浏览次数',
        total: '567',
      },
      {
        icon: require('./images/icon2.png'),
        title: '昨日粉丝数',
        total: '80',
      },
      {
        icon: require('./images/icon3.png'),
        title: '昨日活跃粉丝数',
        total: '89万',
        yestodayTrend: 'increase',
        yestodayNumber: '700',
        weekTrend: 'decrease',
        weekNumber: '8000',
      },
      {
        icon: require('./images/icon4.png'),
        title: '累计内容发布数',
        total: '20',
      },
      {
        icon: require('./images/icon5.png'),
        title: '内容健康度',
        total: '20',
      },
      {
        icon: require('./images/icon6.png'),
        title: '内容质量分',
        total: '20',
      },
      {
        icon: require('./images/icon7.png'),
        title: '微淘号达人指数',
        total: '20',
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
                <img alt={data.title} src={data.icon} className={styles.width} />
              </div>
              <div className={styles.sy}>
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

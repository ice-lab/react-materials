import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const dataSource = [
  {
    nickName: '某某',
    datetime: '2分钟前',
    avatar: require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png'),
    message: '刚刚完成了智能化搭建课程的学习',
  },
  {
    nickName: '某某',
    datetime: '3分钟前',
    avatar: require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png'),
    message: '刚刚完成了 JavaScript 模块化打包课程的学习',
  },
  {
    nickName: '某某',
    datetime: '5分钟前',
    avatar: require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png'),
    message: '刚刚完成了智能化搭建课程的学习',
  },
  {
    nickName: '某某',
    datetime: '1天前',
    avatar: require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png'),
    message: '刚刚完成了智能化搭建课程的学习',
  },
  {
    nickName: '某某',
    datetime: '2天前',
    avatar: require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png'),
    message:
      '刚刚完成了Sketch图形设计课程的学习，课程内容包括组件绘制，画布编辑等',
  },
];

export default function FeedList() {
  const renderItem = (item, idx) => {
    return (
      <div className={styles.item} key={idx}>
        <div className={styles.itemRow}>
          <span className={styles.title}>
            <img src={item.avatar} className={styles.avatar} alt="avatar" />
            {item.nickName} 发布了一个状态
          </span>
          <span className={styles.status}>{item.datetime}</span>
        </div>
        <a href="##" className={styles.message}>
          {item.message}
        </a>
      </div>
    );
  };

  return (
    <div className="feed-list">
      <IceContainer>
        <div className={styles.titleRow}>
          <h2 className={styles.cardTitle}>状态列表</h2>
          <span className={styles.status}>共10条状态</span>
        </div>
        {dataSource.map(renderItem)}
        <div className={styles.allMessage}>
          <a href="##">查看全部消息</a>
        </div>
      </IceContainer>
    </div>
  );
}

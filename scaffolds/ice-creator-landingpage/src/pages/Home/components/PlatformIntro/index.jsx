import React from 'react';
import styles from './index.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.body}>
      <h2 className={styles.title}>全面开放的粉丝运营空间</h2>
      <p className={styles.text}>
        每个创作者都拥有自己的粉丝阵地<br />有力的粉丝运营抓手<br />高效连接每一位粉丝
      </p>
    </div>
    <img
      alt=""
      src={require('./images/TB1kqzXqL1TBuNjy0FjXXajyXXa-2520-1040.jpg')}
      width="1260"
      height="520"
      className={styles.image}
    />
  </div>
);

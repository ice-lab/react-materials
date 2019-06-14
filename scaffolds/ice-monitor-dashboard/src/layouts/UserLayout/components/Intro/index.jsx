import React from 'react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>数据监控系统</div>
        <p className={styles.description}>可视化的数据监控大盘</p>
        <p className={styles.description}>丰富的图表数据展示管理系统</p>
      </div>
    </div>
  );
};


export default LoginIntro;

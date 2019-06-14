import React from 'react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>资产管理系统</div>
        <p className={styles.description}>可视化的资产数据大盘管理</p>
        <p className={styles.description}>简洁易用的固定资产管理系统</p>
      </div>
    </div>
  );
};


export default LoginIntro;

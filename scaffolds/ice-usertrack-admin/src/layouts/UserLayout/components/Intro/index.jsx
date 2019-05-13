import React from 'react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>应用监控系统</div>
        <p className={styles.description}>快速准确实施埋点，一站式采集配置</p>
        <p className={styles.description}>全链路埋点管理分析平台</p>
      </div>
    </div>
  );
};

export default LoginIntro;

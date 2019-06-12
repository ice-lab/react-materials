import React from 'react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>云构建平台</div>
        <p className={styles.description}>一致化的终端开发体验</p>
        <p className={styles.description}>全链路的开发过程管理</p>
        <p className={styles.description}>高品质的配套支持服务</p>
      </div>
    </div>
  );
};


export default LoginIntro;

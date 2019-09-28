import React from 'react';
import styles from './index.module.scss';

function LoginIntro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>人力资源管理系统</div>
        <p className={styles.description}>协作，让企业和团队实现目标</p>
        <p className={styles.description}>
          灵活规划和资源管理全生命周期，高效源于协同
        </p>
      </div>
    </div>
  );
}

export default LoginIntro;

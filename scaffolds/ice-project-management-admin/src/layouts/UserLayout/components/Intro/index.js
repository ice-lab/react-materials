import React from 'react';
import styles from './index.module.scss';

export default function LoginIntro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>项目管理系统</div>
        <p className={styles.description}>协作，让企业和团队实现目标</p>
        <p className={styles.description}>
          灵活规划和管理产品全生命周期，让你的交付远超预期
        </p>
      </div>
    </div>
  );
}

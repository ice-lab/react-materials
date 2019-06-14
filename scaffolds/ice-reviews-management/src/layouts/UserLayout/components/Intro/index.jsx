import React from 'react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>评测管理系统</div>
        <p className={styles.description}>简单、灵活、易使用的产品评测管理系统</p>
        <p className={styles.description}>
          通过邀评快速了解各维度下的产品评测和管理评测
        </p>
      </div>
    </div>
  );
};


export default LoginIntro;

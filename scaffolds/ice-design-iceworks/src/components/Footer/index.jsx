import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.box}>
      <div className={styles.logo}>
        <Logo isDark />
      </div>
      <div className={styles.btitle}>
        阿里巴巴集团
        <br />
        © 2018 版权所有
      </div>
    </div>
  );
};

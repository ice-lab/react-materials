import React from 'react';

import Logo from '../Logo';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <div
      className={styles.newDiv}
    >
      <div className={styles.newFilter}>
        <Logo className={styles.Logo} />
      </div>
      <div
        className={styles.newBottom}
      >
        阿里巴巴集团
        <br />© 2018 版权所有
      </div>
    </div>
  );
}

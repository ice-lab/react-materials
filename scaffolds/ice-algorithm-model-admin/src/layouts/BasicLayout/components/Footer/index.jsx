import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

export default () => {
  return (
    <div
      className={styles.wordBottom}
    >
      <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
        <Logo isDark />
      </div>
      <div
        className={styles.wordsBottom }
      >
        阿里巴巴集团
        <br />
        © 2018 版权所有
      </div>
    </div>
  );
};

import React from 'react';
import styles from './index.module.scss';

export default function Logo() {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logoText}>
        云构建平台
      </a>
    </div>
  );
}

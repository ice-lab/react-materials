import React from 'react';
import styles from './index.module.scss';

export default function Title() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>某某电商销售数据大盘</h3>
    </div>
  );
}

import React from 'react';
import styles from './index.module.scss';

export default function MainData() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <div className={styles.contentNum}>
            <span className={styles.bigNum}>55</span>
            <span className={styles.symbol}>+</span>
          </div>
          <div className={styles.contentDesc}>— 精选组件 —</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.contentNum}>
            <span className={styles.bigNum}>120</span>
            <span className={styles.symbol}>+</span>
          </div>
          <div className={styles.contentDesc}>— 精选区块 —</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.contentNum}>
            <span className={styles.bigNum}>4</span>
            <span className={styles.symbol}>+</span>
          </div>
          <div className={styles.contentDesc}>— 精选模板 —</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './index.module.scss';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>ICE DESIGN 海量物料</div>
        <div className={styles.desc}>淘宝中后台 & 让前端开发简单而友好</div>
        <a className={styles.link}>开始使用</a>
      </div>
    </div>
  );
}

import React from 'react';
import styles from  './index.module.scss';

export default function RightContentDisplay() {
  return (
    <div  className={styles.container}>
      <div  className={styles.content}>
        <div className={styles.col}>
          <img
            src={require('./images/TB1MgyDjsLJ8KJjy0FnXXcFDpXa-618-1046.png')}
            alt="img"
            className={styles.image}
          />
        </div>
        <div className={styles.col}>
          <h2 className={styles.title}>功能描述</h2>
          <p className={styles.description}>
            功能描述的文案，功能描述的文案功能描述的文案功能描述的文案
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './index.module.scss';

export default function LoginIntro() {
  return (
    <div className={styles.containerInfo}>
      <div className={styles.contentInfo}>
        <div className={styles.titleInfo}>优质服务，追求卓越</div>
        <p className={styles.description}>Amazing Stuff is Lorem Here.ICE Team</p>
      </div>
      <div className={styles.mask} />
    </div>
  );
}

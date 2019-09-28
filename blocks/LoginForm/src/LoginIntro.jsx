import React from 'react';
import styles from './index.module.scss';

export default function LoginIntro() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.logo}>
        <a href="#" className={styles.link}>
          <img
            className={styles.logoImg}
            src={require('./images/logo.png')}
            alt="logo"
          />
        </a>
      </div>
      <div className={styles.title}>让前端开发简单友好</div>
      <p className={styles.description}>Amazing Stuff is Lorem Here.ICE Team</p>
      <a href="#" className={styles.button}>
        注册
      </a>
    </div>
  );
}

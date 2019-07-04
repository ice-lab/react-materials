import React from 'react';
import styles from './index.module.scss';

export default () => (
  <div className={styles.container}>
    <img
      src={require('./images/logo.png')}
      className={styles.logo}
      alt="logo"
    />
    <img
      src={require('./images/logo2.png')}
      className={styles.logo2}
      alt="logo"
    />
  </div>
);

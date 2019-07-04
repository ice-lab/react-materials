import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoLink}>
        LOGO
      </Link>
    </div>
  );
};

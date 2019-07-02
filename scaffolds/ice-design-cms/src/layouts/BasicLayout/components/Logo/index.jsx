import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default () => (
  <div className={styles.logo}>
    <Link to="/" className={styles.logoText}>
      LOGO
    </Link>
  </div>
);

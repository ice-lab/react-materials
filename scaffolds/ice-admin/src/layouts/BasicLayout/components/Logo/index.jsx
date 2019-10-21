import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default function Logo({ style, text }) {
  return (
    <div className={styles.container} style={style}>
      <Link to="/" className={styles.logoText}>
        {text || 'LOGO'}
      </Link>
    </div>
  );
}

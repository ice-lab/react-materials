import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo({ style }) {
  return (
    <Link to="/" style={style} className={styles.container}>
      LOGO
    </Link>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo({ style }) {
  return (
    <Link to="/" className={styles.logo} style={style}>
      学校管理系统
    </Link>
  );
}

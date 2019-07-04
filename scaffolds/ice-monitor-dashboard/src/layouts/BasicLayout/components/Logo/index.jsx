import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo(props) {
  return (
    <div className={styles.container}>
      <Link to="/" className={`${styles.logoText} ${props.style}`}>
        数据监控系统
      </Link>
    </div>
  );
}

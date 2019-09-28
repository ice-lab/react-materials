import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo(props) {
  return (
    <Link to="/" className={styles.logoStyle} style={props.style}>
      政府管理系统
    </Link>
  );
}

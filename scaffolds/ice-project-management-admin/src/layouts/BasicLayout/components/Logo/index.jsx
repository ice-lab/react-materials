import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default function Logo(props) {
  return (
    <Link to="/" style={{ ...props.style }} className={styles.logoStyle}>
        项目管理系统
    </Link>
  );
}

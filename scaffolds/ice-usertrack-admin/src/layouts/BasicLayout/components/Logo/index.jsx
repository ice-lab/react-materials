import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      应用监控系统
    </Link>
  );
};


export default Logo;

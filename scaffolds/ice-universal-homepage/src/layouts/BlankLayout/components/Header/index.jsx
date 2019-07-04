import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          LOGO
        </Link>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.activeNavItemLink}>
            首页
          </Link>
          <Link to="/" className={styles.navItemLink}>
            更多
          </Link>
        </li>
      </ul>
    </div>
  );
}

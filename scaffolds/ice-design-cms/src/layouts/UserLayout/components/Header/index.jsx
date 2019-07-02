import React from 'react';
import { Icon } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoLink}>
        LOGO
      </Link>
      <ul className={styles.navs}>
        <li className={styles.navMenu}>
          <a href="#" className={styles.hb}>
            <img
              src="https://img.alicdn.com/tfs/TB1crknwzDpK1RjSZFrXXa78VXa-32-32.png"
              alt=""
              className={styles.internationalImg}
            />
            中国站
            <Icon type="arrow-up" size="xs" className={styles.arrowUpIcon} />
            <Icon type="arrow-down" size="xs" className={styles.arrowDownIcon} />
          </a>
          <ul className={styles.subNavs}>
            <li className={styles.subNavMenu}>
              <a href="#" className={styles.subNavLink}>
                International
              </a>
            </li>
            <li className={styles.subNavMenu}>
              <a href="#" className={styles.subNavLink}>
                日本サイト
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.navMenu}>
          <a href="#" className={styles.navLink}>
            首页
          </a>
        </li>
      </ul>
    </div>
  );
};

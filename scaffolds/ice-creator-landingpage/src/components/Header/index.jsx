import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

const MENUS = [
  {
    name: '工具',
    path: '#tools',
  },
  {
    name: '粉丝',
    path: '#fans',
  },
  {
    name: '商业化',
    path: '#business',
  },
  {
    name: '加入我们',
    path: '#join',
  },
];

export default () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <Logo isDark />
      <div className={styles.headerNavbar}>
        {
          MENUS.map((item, idx) => {
            return (
              <a key={idx} className={styles.headerMenuItem} href={item.path}>{item.name}</a>
            );
          })
        }
      </div>
    </div>
  </div>
);

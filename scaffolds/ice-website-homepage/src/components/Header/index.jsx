import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

const MENUS = [
  {
    name: 'iceworks',
    path: '#iceworks',
  },
  {
    name: '设计',
    path: '#design',
  },
  {
    name: '物料',
    path: '#material',
  },
  {
    name: '品牌',
    path: '#brandlist',
  },
];

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
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
}

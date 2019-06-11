import React, { Component } from 'react';
import Logo from '../Logo';
import styles from  './index/module.scss';

const MENUS = [
  {
    name: '特点',
    path: '#feature',
  },
  {
    name: '项目',
    path: '#project',
  },
  {
    name: 'changelog',
    path: '#changelog',
  },
];

export default class Header extends Component {
  render() {
    return (
      <div className={styles.headercontainer}>
        <div className={styles.headercontent}>
          <Logo />
          <div className={styles.headernavbar}>
            {
              MENUS.map((item, idx) => {
                return (
                  <a key={idx} className={styles.headermenuitem} href={item.path}>{item.name}</a>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

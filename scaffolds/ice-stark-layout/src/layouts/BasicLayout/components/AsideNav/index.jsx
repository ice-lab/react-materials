import React from 'react';
import { AppLink } from '@ice/stark';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '@/config/menu';

import styles from './index.module.scss';

const { Item: NavItem } = Nav;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item) => {
      return (
        <NavItem icon={item.icon} key={item.key}>
          <AppLink to={item.path}>{item.name}</AppLink>
        </NavItem>
      );
    });
}

export default (props) => {
  const { pathname } = props;
  const menuAKeys = ['/', '/home', '/about', '/xxxxx'];
  const selectedKey = menuAKeys.indexOf(pathname) >= 0 ? 'A' : 'B';

  return (
    <Nav type="primary" embeddable selectedKeys={[selectedKey]} className={styles.asideNav}>
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

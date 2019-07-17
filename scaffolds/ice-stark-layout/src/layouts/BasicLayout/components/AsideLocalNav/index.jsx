import React from 'react';
import { AppLink } from '@ice/stark';
import { Nav } from '@alifd/next';
import { asideLocalMenu } from '@/config/menu';

import styles from './index.module.scss';

const { Item: NavItem, SubNav } = Nav;

function getLocalNavMenuItems(localMenus) {
  if (!localMenus) {
    return [];
  }

  return localMenus
    .filter(item => item.name && !item.hideInMenu)
    .map(item => {
      const { name, path, icon, children } = item;
      if (children) {
        return (
          <SubNav label={name} key={name || path}>
            {children.map(child => {
              const { name: childName, path: childPath } = child;
              return (
                <NavItem key={childPath}>
                  <AppLink to={childPath}>{childName}</AppLink>
                </NavItem>
              );
            })}
          </SubNav>
        );
      }

      return (
        <NavItem icon={icon} key={path}>
          <AppLink to={path}>{name}</AppLink>
        </NavItem>
      );
    });
}

export default ({ pathname }) => {
  let currentLocalMenu;
  if (pathname && String(pathname).indexOf('/waiter') > -1) {
    currentLocalMenu = asideLocalMenu[1];
  } else {
    currentLocalMenu = asideLocalMenu[0];
  }

  const localMenus =
    currentLocalMenu && currentLocalMenu.children ? currentLocalMenu.children : currentLocalMenu;

  return (
    <Nav embeddable selectedKeys={[pathname]} className={styles.localNav}>
      {getLocalNavMenuItems(localMenus)}
    </Nav>
  );
};

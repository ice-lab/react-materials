import React from 'react';
import { AppLink } from '@ice/stark';
import { Nav } from '@alifd/next';

const { Item: NavItem } = Nav;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => {
      return (
        <NavItem icon={item.icon} key={item.path}>
          <AppLink to={item.path}>{item.name}</AppLink>
        </NavItem>
      );
    });
}

export default props => {
  const { asideMenus } = props;
  const selectedKeys = asideMenus.filter(item => item.selected).map(item => item.path);

  return (
    <Nav embeddable selectedKeys={selectedKeys}>
      {getNavMenuItems(asideMenus)}
    </Nav>
  );
};

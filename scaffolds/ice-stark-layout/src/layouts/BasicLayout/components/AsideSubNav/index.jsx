import React from 'react';
import { AppLink } from '@ice/stark';
import { Nav } from '@alifd/next';

const { Item: NavItem } = Nav;

function getSubNavMenuItems(subMenus) {
  if (!subMenus) {
    return [];
  }

  return subMenus.map(item => {
    const { name, path, icon } = item;
    return (
      <NavItem icon={icon} key={path}>
        <AppLink to={path}>{name}</AppLink>
      </NavItem>
    );
  });
}

export default ({ asideSubMenus }) => {
  const selectedKeys = asideSubMenus.filter(item => item.selected).map(item => item.path);

  return (
    <Nav embeddable selectedKeys={selectedKeys}>
      {getSubNavMenuItems(asideSubMenus)}
    </Nav>
  );
};

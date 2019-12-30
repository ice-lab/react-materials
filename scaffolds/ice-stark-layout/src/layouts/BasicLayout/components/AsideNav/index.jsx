import React from 'react';
import { AppLink } from '@ice/stark';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '@/config/menu';

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

function getNavMenuItems(menusData, isCollapse) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index, isCollapse);
    });
}

function getSubMenuOrItem(item, index, isCollapse) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);
    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav
          key={index}
          icon={item.icon}
          label={item.name}
          mode={isCollapse ? 'popup' : 'inline'}
        >
          {childrenItems}
        </SubNav>
      );

      return subNav;
    }
    return null;
  }
  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      <AppLink to={item.path}>
        {item.name}
      </AppLink>
    </NavItem>
  );

  return navItem;
}

export default function AsideNav({pathname}) {
  return (
    <Nav
      type="primary"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      openMode="single"
      hasArrow={false}
    >
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

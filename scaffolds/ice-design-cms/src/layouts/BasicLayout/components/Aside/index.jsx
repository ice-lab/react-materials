import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import cx from 'classnames';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Nav } from '@alifd/next';
import Logo from '../Logo';
import { asideMenuConfig } from '@/menuConfig';
import styles from './index.module.scss';

const Icon = FoundationSymbol;

function getDefaultOpenKeys(location = {}) {
  const { pathname } = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index);
    });
}

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <Nav.SubNav
          key={index}
          label={(
            <span>
              {item.icon ? (
                <FoundationSymbol size="small" type={item.icon} />
              ) : null}
              <span className="ice-menu-collapse ice-menu-collapse-hide">
                {item.name}
              </span>
            </span>
          )}
        >
          {childrenItems}
        </Nav.SubNav>
      );
    }
    return null;
  }
  return (
    <Nav.Item key={item.path}>
      <Link to={item.path}>{item.name}</Link>
    </Nav.Item>
  );
}

const Aside = (props) => {
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  function onMenuClick() {
    toggleMenu();
  }

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  const {
    location: { pathname },
    isMobile,
  } = props;

  return (
    <div
      className={cx(styles.iceDesignLayoutAside, { [styles.openDrawer]: openDrawer })}
    >
      {isMobile && <Logo />}

      {isMobile && !openDrawer && (
        <a className={styles.menuBtn} onClick={toggleMenu}>
          <Icon type="category" size="small" />
        </a>
      )}

      <Nav
        style={{ width: 200 }}
        mode="inline"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        defaultSelectedKeys={[pathname]}
        onClick={onMenuClick}
        onOpen={onOpenChange}
        type="secondary"
      >
        {getNavMenuItems(asideMenuConfig)}
      </Nav>
    </div>
  );
};

export default withRouter(Aside);

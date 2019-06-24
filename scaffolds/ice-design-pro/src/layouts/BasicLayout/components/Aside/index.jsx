import React, { useState } from 'react';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Nav } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import { asideMenuConfig } from '@/menuConfig';
import Logo from '../Logo';
import styles from './index.module.scss';

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

/**
 * menuConfig.js 的 name 属性和 locals/menu.js 的 key 进行对应
 * 在这里进行转换 path: '/chart/basic' => 'app.menu.chart.basic'
 */
function getLocaleKey(item) {
  return `app.menu${item.path.replace(/\//g, '.')}`;
}

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <SubNav
          key={index}
          icon={item.icon ? item.icon : null}
          label={
            <span className="ice-menu-collapse-hide">
              <FormattedMessage id={getLocaleKey(item)} />
            </span>
          }
        >
          {childrenItems}
        </SubNav>
      );
    }
    return null;
  }
  return (
    <NavItem key={item.path}>
      <Link to={item.path}>
        <FormattedMessage id={getLocaleKey(item)} />
      </Link>
    </NavItem>
  );
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
 * 获取默认展开菜单项
 */
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

const Aside = withRouter((props) => {
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [collapse, setCollapse] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  /**
   * 响应式通过抽屉形式切换菜单
   */
  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  /**
   * 折叠搜索切换
   */
  function toggleCollapse() {
    setCollapse(!collapse);
    setOpenKeys([]);
  }

  /**
   * 左侧菜单收缩切换
   */
  function onSelect() {
    toggleMenu();
  }

  /**
   * 当前展开的菜单项
   */
  function onOpenChange(keys) {
    setOpenKeys(keys);
    setOpenDrawer(false);
  }

  const {
    location: { pathname },
    isMobile,
  } = props;

  const openDrawerClassName = openDrawer ? styles.openDrawer : '';

  return (
    <div className={`${styles.iceDesignLayoutAside} ${styles.iceDesignProAside} ${openDrawerClassName}`}>
      {isMobile && <Logo />}

      {isMobile && !openDrawer && (
        <a className={styles.menuBtn} onClick={toggleMenu}>
          <FoundationSymbol type="menu" size="small" />
        </a>
      )}

      {!isMobile && (
        <a className="collapse-btn" onClick={toggleCollapse}>
          <FoundationSymbol
            key={collapse}
            type={collapse ? 'transfer-right' : 'transfer-left'}
            size="large"
          />
        </a>
      )}

      <Nav
        style={{ width: collapse ? 60 : 200 }}
        mode={collapse ? 'popup' : 'inline'}
        iconOnly={collapse}
        hasArrow={!collapse}
        activeDirection={null}
        selectedKeys={[pathname]}
        openKeys={openKeys}
        defaultSelectedKeys={[pathname]}
        onOpen={onOpenChange}
        onSelect={onSelect}
      >
        {getNavMenuItems(asideMenuConfig)}
      </Nav>
    </div>
  );
});

export default Aside;

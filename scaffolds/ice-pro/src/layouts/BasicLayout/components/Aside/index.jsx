import React, { useState, useEffect, useRef } from 'react';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import stores from '@/stores/index';
import Auth from '@/components/Auth';
import { asideMenuConfig } from '@/config/menu.js';
// import { request } from '@/utils/request';
// import { menu } from '@/config/dataSource';
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
 * 根据权限决定是否渲染某个表单项
 * @param {object} item - 菜单项组件
 * @param {array} authorities - 菜单项允许权限数组
 * @return {object} 渲染的菜单项
 */
function renderAuthItem(item, authorities) {
  if (authorities) {
    return Auth({
      children: item,
      authorities,
      hidden: true,
    });
  } else {
    return item;
  }
}

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);
    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav
          key={index}
          icon={item.icon ? <FoundationSymbol type={item.icon} size="small" /> : null}
          label={
            <span className="ice-menu-collapse-hide">
              <FormattedMessage id={getLocaleKey(item)} />
            </span>
          }
        >
          {childrenItems}
        </SubNav>
      );

      return renderAuthItem(subNav, item.authorities);
    }
    return null;
  }
  const navItem = (
    <NavItem key={item.path}>
      <Link to={item.path}>
        <FormattedMessage id={getLocaleKey(item)} />
      </Link>
    </NavItem>
  );

  return renderAuthItem(navItem, item.authorities);
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

const Aside = withRouter((props) => {
  const expandAside = stores.useStore('expandAside');
  const [
    menuConfig,
    // useMenuConfig,
  ] = useState(asideMenuConfig);
  const { collapse, toggle } = expandAside;

  const { location, isMobile } = props;
  const { pathname } = location;

  /**
   * 获取默认展开菜单项
   */
  function getDefaultOpenKeys(location = {}) {
    const { pathname } = location;
    const menus = getNavMenuItems(menuConfig);

    let openKeys = [];
    if (Array.isArray(menus)) {
      menuConfig.forEach((item, index) => {
        if (pathname.startsWith(item.path)) {
          openKeys = [`${index}`];
        }
      });
    }

    return openKeys;
  }
  const defaultOpenKeys = getDefaultOpenKeys(location);
  const [openKeys, setOpenKeys] = useState(collapse ? [] : defaultOpenKeys);
  const [mode, setMode] = useState('inline');
  const cacheOpenKeys = useRef(openKeys);

  // // 异步加载菜单数据示例
  // async function fetchMenuData() {
  //   const { data } = await request(menu);
  //   useMenuConfig(data.list);
  // }
  //
  // useEffect(() => {
  //   fetchMenuData();
  // }, []);


  useEffect(() => {

    if (isMobile) {
      if (!collapse) {
        toggle(true);
      }
    } else {
      toggle(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (collapse) {
      cacheOpenKeys.current = openKeys;
      setMode('popup');
      setOpenKeys([]);
    } else {
      setMode('inline');
      setOpenKeys(cacheOpenKeys.current);
    }
  }, [collapse]);

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  return (
    <div className={`${styles.iceDesignLayoutAside} ${styles.iceDesignProAside}`}>
      <Nav
        style={{width: collapse ? '60px' : '200px'}}
        mode={mode}
        iconOnly={collapse}
        hasArrow={!collapse}
        triggerType={collapse ? 'hover' : 'click'}
        activeDirection={null}
        openKeys={openKeys}
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        onOpen={onOpenChange}
      >
        {getNavMenuItems(menuConfig)}
      </Nav>
    </div>
  );
});

export default Aside;

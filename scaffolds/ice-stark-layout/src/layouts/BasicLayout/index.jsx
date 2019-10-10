import React, { useState, useEffect, useMemo } from 'react';
import Shell from '@alifd/shell';
import { enquire } from 'enquire-js';
import { Icon, Nav } from '@alifd/next';
import { AppLink } from '@ice/stark';
import cloneDeep from 'lodash.clonedeep';
import { headerMenuConfig, asideMenuConfig } from '@/config/menu';
import { userProfile } from '@/config/dataSource';
import request from '@/utils/request';

import Logo from './components/Logo';
import AsideNav from './components/AsideNav';
import AsideSubNav from './components/AsideSubNav';
import Footer from './components/Footer';

import styles from './index.module.scss';

function getMenuDataByPathname(pathname) {
  let asideSubMenus = [];
  const asideMenus = cloneDeep(asideMenuConfig).map((item) => {
    const checkSelected = () => {
      // /^\/seller/: /seller/list, /seller
      return new RegExp(`^${item.path}`).test(pathname);
    };

    if (item.checkSelected ? item.checkSelected(pathname) : checkSelected()) {
      item.selected = true;
      asideSubMenus = (item.children || []).map((subItem) => {
        if (pathname === subItem.path) {
          subItem.selected = true;
        }
        return subItem;
      });
    }
    return item;
  });

  return { asideMenus, asideSubMenus };
}

const BasicLayout = ({ children, pathname }) => {
  const [isScreen, setIsScreen] = useState();

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      },
    };

    return handler;
  }

  useEffect(() => {
    /**
     * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
     */
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, enquireScreenHandle('isMobile'));
    enquire.register(isTablet, enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, enquireScreenHandle('isDesktop'));
  }, []);

  const isMobile = isScreen !== 'isDesktop';

  // header
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request(userProfile);
        const { name, avatar } = data.data;
        await setUserinfo({ name, avatar });
      } catch (err) {
        await setUserinfo({});
      }
    }
    fetchData();
  }, []);

  const { asideMenus, asideSubMenus } = useMemo(() => {
    return getMenuDataByPathname(pathname);
  }, [pathname]);

  const { name, avatar } = userinfo;

  return (
    <Shell className={styles.shell} device={isMobile ? 'phone' : 'desktop'}>
      <Shell.Branding>
        <Logo />
        <span className={styles.appName}>icestark</span>
      </Shell.Branding>
      <Shell.Navigation direction="hoz">
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <Nav direction="hoz" type="secondary" selectedKeys={[]}>
            {headerMenuConfig.map((nav, idx) => {
              const linkProps = {};
              if (nav.newWindow) {
                linkProps.href = nav.path;
                linkProps.target = '_blank';
              } else if (nav.external) {
                linkProps.href = nav.path;
              } else {
                linkProps.to = nav.path;
              }
              return (
                <Nav.Item key={idx} icon={nav.icon ? nav.icon : null}>
                  {linkProps.to ? (
                    <AppLink {...linkProps}>{!isMobile ? nav.name : null}</AppLink>
                  ) : (
                    <a {...linkProps}>{!isMobile ? nav.name : null}</a>
                  )}
                </Nav.Item>
              );
            })}
          </Nav>
        ) : null}
      </Shell.Navigation>
      <Shell.Action>
        <img src={avatar} className={styles.avatar} alt="avatar" />
        <span className={styles.userName}>{name}</span>
      </Shell.Action>

      <Shell.Navigation>
        <AsideNav asideMenus={asideMenus} />
      </Shell.Navigation>

      <Shell.LocalNavigation>
        <AsideSubNav asideSubMenus={asideSubMenus} />
      </Shell.LocalNavigation>

      <Shell.Content>{children}</Shell.Content>

      <Shell.Footer>
        <Footer />
      </Shell.Footer>

      <Shell.ToolDock>
        <Shell.ToolDockItem>
          <Icon type="search" />
        </Shell.ToolDockItem>
        <Shell.ToolDockItem>
          <Icon type="calendar" />
        </Shell.ToolDockItem>
        <Shell.ToolDockItem>
          <Icon type="atm" />
        </Shell.ToolDockItem>
        <Shell.ToolDockItem>
          <Icon type="account" />
        </Shell.ToolDockItem>
      </Shell.ToolDock>
    </Shell>
  );
};

export default BasicLayout;

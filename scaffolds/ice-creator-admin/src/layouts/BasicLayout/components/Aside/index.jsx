import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FoundationSymbol from '@icedesign/foundation-symbol';
import Layout from '@icedesign/layout';
import { Nav } from '@alifd/next';
import React, { useState } from 'react';
import { asideMenuConfig } from '@/config/menu.js';
import styles from './index.module.scss';

const { SubNav, Item } = Nav;

const Aside = (props) => {
  /**
   * 获取当前展开的菜单项
   */
  const getDefaultOpenKeys = () => {
    const { location = {} } = props;
    const { pathname } = location;

    let openKeys = [];
    if (Array.isArray(asideMenuConfig)) {
      asideMenuConfig.forEach((item, index) => {
        if (pathname.startsWith(item.path)) {
          openKeys = [`${index}`];
        }
      });
    }

    return openKeys;
  };

  let openKeysCache = getDefaultOpenKeys();
  const [openKeys, setOpenKeys] = useState(openKeysCache);

  /**
   * 当前展开的菜单项
   */
  const onOpenChange = (newOpenKeys) => {
    setOpenKeys(newOpenKeys);
    openKeysCache = newOpenKeys;
  };

  const { location } = props;
  const { pathname } = location;

  return (
    <Layout.Aside className={styles.aside}>
      <Nav
        selectedKeys={[pathname]}
        className={styles.menu}
        openKeys={openKeys}
        onOpen={onOpenChange}
      >
        {Array.isArray(asideMenuConfig)
          && asideMenuConfig.length > 0
          && asideMenuConfig.map((nav, index) => {
            if (nav.children && nav.children.length > 0) {
              return (
                <SubNav
                  key={index}
                  label={(
                    <span>
                      {nav.icon ? (
                        <FoundationSymbol size="small" type={nav.icon} />
                      ) : null}
                      <span className="ice-menu-collapse-hide">
                        {nav.name}
                      </span>
                    </span>
)}
                >
                  {nav.children.map((item) => {
                    const linkProps = {};
                    if (item.newWindow) {
                      linkProps.href = item.path;
                      linkProps.target = '_blank';
                    } else if (item.external) {
                      linkProps.href = item.path;
                    } else {
                      linkProps.to = item.path;
                    }
                    return (
                      <Item key={item.path}>
                        <Link {...linkProps}>{item.name}</Link>
                      </Item>
                    );
                  })}
                </SubNav>
              );
            }
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
              <Item key={nav.path}>
                <Link {...linkProps}>
                  <span>
                    {nav.icon ? (
                      <FoundationSymbol size="small" type={nav.icon} />
                    ) : null}
                    <span className="ice-menu-collapse-hide">{nav.name}</span>
                  </span>
                </Link>
              </Item>
            );
          })}
      </Nav>
      {/* 侧边菜单项 end */}
    </Layout.Aside>
  );
};

export default withRouter(Aside);

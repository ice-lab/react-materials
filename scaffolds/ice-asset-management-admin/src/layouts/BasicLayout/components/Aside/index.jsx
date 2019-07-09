import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import Layout from '@icedesign/layout';
import { Nav } from '@alifd/next';
import React, { useState } from 'react';
import { asideMenuConfig } from '@/config/menu.js';
import Logo from '../Logo';
import styles from './index.module.scss';

function Aside(props) {
  const { location } = props;
  const { pathname } = location;
  /**
   * 获取当前展开的菜单项
   */
  function getDefaultOpenKeys() {
    let openKeys = [];
    if (Array.isArray(asideMenuConfig)) {
      asideMenuConfig.forEach((item, index) => {
        if (pathname.startsWith(item.path)) {
          openKeys = [`${index}`];
        }
      });
    }

    return openKeys;
  }

  const [openKeys, setOpenKeys] = useState(getDefaultOpenKeys());

  /**
   * 当前展开的菜单项
   */
  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  return (
    <Layout.Aside width="240" theme="light" className={styles.customAside}>
      <div className={styles.asideLogo}>
        <Logo />
      </div>
      <Nav
        defaultSelectedKeys={[pathname]}
        mode="inline"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpen={onOpenChange}
        className={styles.customMenu}
        type="primary"
      >
        {Array.isArray(asideMenuConfig)
          && asideMenuConfig.length > 0
          && asideMenuConfig.map((nav, index) => {
            if (nav.children && nav.children.length > 0) {
              return (
                <Nav.SubNav
                  key={index}
                  label={(
                    <span>
                      {nav.icon ? (
                        <FoundationSymbol
                          style={{ marginRight: '8px' }}
                          size="small"
                          type={nav.icon}
                        />
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
                      <Nav.Item key={item.path}>
                        <Link {...linkProps}>{item.name}</Link>
                      </Nav.Item>
                    );
                  })}
                </Nav.SubNav>
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
              <Nav.Item key={nav.path}>
                <Link {...linkProps}>
                  <span>
                    {nav.icon ? (
                      <FoundationSymbol
                        style={{ marginRight: '8px' }}
                        size="small"
                        type={nav.icon}
                      />
                    ) : null}
                    <span className="ice-menu-collapse-hide">{nav.name}</span>
                  </span>
                </Link>
              </Nav.Item>
            );
          })}
      </Nav>
      {/* 侧边菜单项 end */}
    </Layout.Aside>
  );
}

export default withRouter(Aside);

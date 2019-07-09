import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Layout from '@icedesign/layout';
import { Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';

import { asideMenuConfig } from '@/config/menu.js';
import './index.scss';

const { SubNav, Item } = Nav;

function getDefaultOpenKeys(pathname) {
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

const Aside = withRouter((props) => {
  const { location = {} } = props;
  const { pathname } = location;
  const [openKeys, setOpenKeys] = useState(getDefaultOpenKeys(pathname));

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  return (
    <Layout.Aside width="240" theme="light" className="custom-aside">
      <Nav
        defaultSelectedKeys={[pathname]}
        selectedKeys={[pathname]}
        onOpen={onOpenChange}
        openKeys={openKeys}
        className="custom-menu"
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
});

export default Aside;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from '@alifd/next';

import headerMenuConfig from '@/config/menu.js';
import './index.scss';

const NavItem = Nav.Item;
const SubNav = Nav.SubNav;

const NavBar = withRouter((props) => {
  const { location = {} } = props;
  const { pathname } = location;

  return (
    <Nav
      className="header-navbar-menu"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      direction="hoz"
    >
      {headerMenuConfig
        && headerMenuConfig.length > 0
        && headerMenuConfig.map((nav, index) => {
          if (nav.children && nav.children.length > 0) {
            return (
              <SubNav
                key={index}
                icon={nav.icon ? nav.icon : null}
                label={nav.name}
              >
                {nav.children.map((item) => {
                  const linkProps = {};
                  if (item.external) {
                    if (item.newWindow) {
                      linkProps.target = '_blank';
                    }

                    linkProps.href = item.path;
                    return (
                      <NavItem key={item.path}>
                        <a {...linkProps}>
                          <span>{item.name}</span>
                        </a>
                      </NavItem>
                    );
                  }
                  linkProps.to = item.path;
                  return (
                    <NavItem key={item.path}>
                      <Link {...linkProps}>
                        <span>{item.name}</span>
                      </Link>
                    </NavItem>
                  );
                })}
              </SubNav>
            );
          }
          const linkProps = {};
          if (nav.external) {
            if (nav.newWindow) {
              linkProps.target = '_blank';
            }
            linkProps.href = nav.path;
            return (
              <NavItem key={nav.path} icon={nav.icon ? nav.icon : null}>
                <a {...linkProps}>{nav.name}</a>
              </NavItem>
            );
          }
          linkProps.to = nav.path;
          return (
            <NavItem key={nav.path} icon={nav.icon ? nav.icon : null}>
              <Link {...linkProps}>{nav.name}</Link>
            </NavItem>
          );
        })}
    </Nav>
  );
});

export default NavBar;

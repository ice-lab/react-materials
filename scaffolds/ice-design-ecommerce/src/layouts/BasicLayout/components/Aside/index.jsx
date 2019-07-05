import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import { asideMenuConfig } from '@/config/menu';
import styles from './index.module.scss';

const NavItem = Nav.Item;

const Aside = withRouter((props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <Nav
      direction="ver"
      selectedKeys={[pathname]}
      className={styles.iceMenuCustom}
      style={{ width: 100 }}
    >
      {Array.isArray(asideMenuConfig)
      && asideMenuConfig.length > 0
      && asideMenuConfig.map((nav) => {
        return (
          <NavItem key={nav.path} icon={nav.icon ? nav.icon : null}>
            <Link to={nav.path} className="ice-menu-link">
              <span className="ice-menu-item-text">
                {nav.name}
              </span>
            </Link>
          </NavItem>
        );
      })}
    </Nav>
  );
});

export default Aside;

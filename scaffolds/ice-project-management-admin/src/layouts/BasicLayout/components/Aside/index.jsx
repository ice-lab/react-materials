import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import { asideMenuConfig } from '@/config/menu.js';
import styles from './index.module.scss';

const NavItem = Nav.Item;

const Aside = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <div className={styles.iceAsideCustom}>
      <div className={styles.iceAsideLogo}>LOGO</div>
      <Nav selectedKeys={[pathname]} className="ice-menu-custom">
        {Array.isArray(asideMenuConfig)
            && asideMenuConfig.length > 0
            && asideMenuConfig.map((nav) => {
              return (
                <NavItem key={nav.path} icon={nav.icon ? nav.icon : undefined}>
                  <Link to={nav.path} className="ice-menu-link">
                    <span className="ice-menu-item-text">{nav.name}</span>
                  </Link>
                </NavItem>
              );
            })}
      </Nav>
    </div>
  );
};

export default withRouter(Aside);

import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol/lib';
import { asideMenuConfig } from '@/menuConfig';
import styles from './index.module.scss';

function Aside(props) {
  const { location: { pathname } } = props;

  return (
    <Nav
      selectedKeys={[pathname]}
      className={styles.iceMenuCustom}
      activeDirection="right"
    >
      {Array.isArray(asideMenuConfig)
        && asideMenuConfig.length > 0
        && asideMenuConfig.map((nav) => {
          return (
            <Nav.Item key={nav.path}>
              <Link to={nav.path} className={styles.iceMenuLink}>
                {nav.icon ? (
                  <FoundationSymbol size="small" type={nav.icon} />
                ) : null}
                <span className={styles.iceNavItemText}>{nav.name}</span>
              </Link>
            </Nav.Item>
          );
        })}
    </Nav>
  );
}

export default withRouter(Aside);

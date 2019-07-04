/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { asideMenuConfig } from '@/menuConfig';
import styles from './index.module.scss';

const { Item } = Nav;

const Aside = withRouter((props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <Nav mode="inline" type="primary" selectedKeys={[pathname]} className={styles.iceMenuCustom}>
      {Array.isArray(asideMenuConfig)
        && asideMenuConfig.length > 0
        && asideMenuConfig.map((nav) => {
          return (
            <Item key={nav.path}>
              <Link to={nav.path} className={styles.iceMenuLink}>
                {nav.icon ? (
                  <FoundationSymbol size="small" type={nav.icon} />
                ) : null}
                <span className={styles.iceMenuItemText}>{nav.name}</span>
              </Link>
            </Item>
          );
        })}
    </Nav>
  );
});

export default Aside;

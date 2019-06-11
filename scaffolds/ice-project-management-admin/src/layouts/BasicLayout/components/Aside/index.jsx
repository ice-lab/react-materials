/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import { asideMenuConfig } from '../../../../menuConfig';
import styles from  './index.module.scss';

const NavItem = Nav.Item;

@withRouter
export default class BasicLayout extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <div className={styles.iceasid-custom}>
        <div className={styles.iceasidelogo}>LOGO</div>
        <Nav selectedKeys={[pathname]} className={styles.icemenucustom}>
          {Array.isArray(asideMenuConfig) &&
            asideMenuConfig.length > 0 &&
            asideMenuConfig.map((nav) => {
              return (
                <NavItem key={nav.path} icon={nav.icon ? nav.icon : undefined}>
                  <Link to={nav.path} className={styles.icemenulink}>
                    <span className={styles.icemenuitemtext}>{nav.name}</span>
                  </Link>
                </NavItem>
              );
            })}
        </Nav>
      </div>
    );
  }
}

/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from '_react@16.8.6@react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from '_react-router-dom@4.3.1@react-router-dom';
import FoundationSymbol from '_@icedesign_foundation-symbol@1.0.3@@icedesign/foundation-symbol/lib';
import { asideMenuConfig } from '../../../../menuConfig';
import './Aside.scss';

@withRouter
export default class BasicLayout extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    return (
      <Nav
        selectedKeys={[pathname]}
        className="ice-menu-custom"
        activeDirection="right"
      >
        {Array.isArray(asideMenuConfig) &&
          asideMenuConfig.length > 0 &&
          asideMenuConfig.map((nav) => {
            return (
              <Nav.Item key={nav.path}>
                <Link to={nav.path} className="ice-menu-link">
                  {nav.icon ? (
                    <FoundationSymbol size="small" type={nav.icon} />
                  ) : null}
                  <span className="ice-nav-item-text">{nav.name}</span>
                </Link>
              </Nav.Item>
            );
          })}
      </Nav>
    );
  }
}

import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { asideMenuConfig } from '@/config/menu';

const Aside = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <Nav activeDirection={null} selectedKeys={[pathname]} className="ice-menu-custom">
      {Array.isArray(asideMenuConfig)
        && asideMenuConfig.length > 0
        && asideMenuConfig.map((nav) => {
          return (
            <Nav.Item key={nav.path}>
              <Link to={nav.path} className="ice-menu-link">
                {nav.icon ? (
                  <FoundationSymbol size="small" type={nav.icon} />
                ) : null}
                <span className="ice-menu-item-text">{nav.name}</span>
              </Link>
            </Nav.Item>
          );
        })}
    </Nav>
  );
};

export default withRouter(Aside);

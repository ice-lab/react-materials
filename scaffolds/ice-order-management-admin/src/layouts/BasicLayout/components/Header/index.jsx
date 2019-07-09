import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { headerMenuConfig } from '@/config/menu.js';
import styles from './index.module.scss';

function Header(props) {
  const { location = {} } = props;
  const { pathname } = location;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerNavbar}>
        <Nav
          className={styles.headerNavbarMenu}
          selectedKeys={[pathname]}
          defaultSelectedKeys={[pathname]}
          direction="hoz"
          type="secondary"
        >
          {headerMenuConfig
            && headerMenuConfig.length > 0
            && headerMenuConfig.map((nav, index) => {
              if (nav.children && nav.children.length > 0) {
                return (
                  <Nav.SubNav
                    triggerType="click"
                    key={index}
                    title={(
                      <span>
                        {nav.icon ? (
                          <FoundationSymbol size="small" type={nav.icon} />
                        ) : null}
                        <span>{nav.name}</span>
                      </span>
)}
                  >
                    {nav.children.map((item) => {
                      const linkProps = {};
                      if (item.external) {
                        if (item.newWindow) {
                          linkProps.target = '_blank';
                        }

                        linkProps.href = item.path;
                        return (
                          <Nav.Item key={item.path}>
                            <a {...linkProps}>
                              <span>{item.name}</span>
                            </a>
                          </Nav.Item>
                        );
                      }
                      linkProps.to = item.path;
                      return (
                        <Nav.Item key={item.path}>
                          <Link {...linkProps}>
                            <span>{item.name}</span>
                          </Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav.SubNav>
                );
              }
              const linkProps = {};
              if (nav.external) {
                if (nav.newWindow) {
                  linkProps.target = '_blank';
                }
                linkProps.href = nav.path;
                return (
                  <Nav.Item key={nav.path}>
                    <a {...linkProps}>
                      <span>
                        {nav.icon ? (
                          <FoundationSymbol size="small" type={nav.icon} />
                        ) : null}
                        {nav.name}
                      </span>
                    </a>
                  </Nav.Item>
                );
              }
              linkProps.to = nav.path;
              return (
                <Nav.Item key={nav.path}>
                  <Link {...linkProps}>
                    <span>
                      {nav.icon ? (
                        <FoundationSymbol size="small" type={nav.icon} />
                      ) : null}
                      {nav.name}
                    </span>
                  </Link>
                </Nav.Item>
              );
            })}
        </Nav>
      </div>
    </div>
  );
}

export default withRouter(Header);

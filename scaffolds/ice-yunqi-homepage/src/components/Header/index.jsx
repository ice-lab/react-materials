import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from '@alifd/next';
import { headerMenuConfig } from '@/config/menu';
import Logo from '../Logo';
import styles from './index.module.scss';

function Header(props) {
  const { location: { pathname } } = props;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <Nav
          className={styles.headerNavbarMenu}
          selectedKeys={[pathname]}
          defaultSelectedKeys={[pathname]}
          direction="hoz"
          triggerType="click"
          activeDirection={null}
        >
          {headerMenuConfig
            && headerMenuConfig.length > 0
            && headerMenuConfig.map((nav, index) => {
              if (nav.children && nav.children.length > 0) {
                return (
                  <Nav.SubNav
                    key={index}
                    title={<span>{nav.name}</span>}
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
                      <span>{nav.name}</span>
                    </a>
                  </Nav.Item>
                );
              }
              linkProps.to = nav.path;
              return (
                <Nav.Item key={nav.path}>
                  <Link {...linkProps}>
                    <span>{nav.name}</span>
                  </Link>
                </Nav.Item>
              );
            })}
        </Nav>
        <a href="#" className={styles.ticketButton}>
          立即购票
        </a>
      </div>
    </div>
  );
}

export default withRouter(Header);

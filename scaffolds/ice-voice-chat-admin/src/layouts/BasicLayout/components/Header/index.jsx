import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon, Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import { headerMenuConfig } from '@/menuConfig';
import Logo from '../Logo';
import styles from './index.module.scss';

const { SubNav, Item } = Nav;

const Header = withRouter((props) => {
  const { location = {} } = props;
  const { pathname } = location;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo isDark />
        <div className={styles.headerNavbar}>
          <Nav
            className={styles.headerNavbarMenu}
            selectedKeys={[pathname]}
            defaultSelectedKeys={[pathname]}
            direction="hoz"
            type="primary"
          >
            {headerMenuConfig
              && headerMenuConfig.length > 0
              && headerMenuConfig.map((nav, index) => {
                if (nav.children && nav.children.length > 0) {
                  return (
                    <SubNav
                      triggerType="click"
                      key={index}
                      title={(
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className={styles.iceMenuItemText}>{nav.name}</span>
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
                            <Item key={item.path}>
                              <a {...linkProps}>
                                <span>{item.name}</span>
                              </a>
                            </Item>
                          );
                        }
                        linkProps.to = item.path;
                        return (
                          <Item key={item.path}>
                            <Link {...linkProps}>
                              <span>{item.name}</span>
                            </Link>
                          </Item>
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
                    <Item key={nav.path}>
                      <a {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className={styles.iceMenuItemText}>{nav.name}</span>
                        </span>
                      </a>
                    </Item>
                  );
                }
                linkProps.to = nav.path;
                return (
                  <Item key={nav.path}>
                    <Link {...linkProps}>
                      <span>
                        {nav.icon ? (
                          <FoundationSymbol size="small" type={nav.icon} />
                        ) : null}
                        <span className={styles.iceMenuItemText}>{nav.name}</span>
                      </span>
                    </Link>
                  </Item>
                );
              })}
          </Nav>
          <Balloon
            triggerType="hover"
            trigger={(
              <div
                className={styles.iceHeaderUserpannel}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
                  src={require('./images/avatar.png')}
                  className={styles.userAvatar}
                />
                <div className={styles.userProfile}>
                  <span className={styles.userName} style={{ fontSize: '13px' }}>
                    淘小宝
                  </span>
                  <br />
                  <span className={styles.userDepartment}>技术部</span>
                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className={styles.iconDown}
                />
              </div>
            )}
            closable={false}
            className={styles.userProfileMenu}
          >
            <ul>
              <li className={styles.userProfileMenuItem}>
                <Link to="/setting">
                  <FoundationSymbol type="repair" size="small" />
                  设置
                </Link>
              </li>
              <li className={styles.userProfileMenuItem}>
                <Link to="/user/login">
                  <FoundationSymbol type="compass" size="small" />
                  退出
                </Link>
              </li>
            </ul>
          </Balloon>
        </div>
      </div>
    </div>
  );
});

export default Header;

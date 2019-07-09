import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import { headerMenuConfig } from '@/config/menu.js';
import Logo from '../Logo';
import styles from './index.module.scss';

const NavItem = Nav.Item;

const Header = withRouter((props) => {
  function handleNavClick() {}

  const { location = {} } = props;
  const { pathname } = location;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo isDark />
        <div className={styles.headerNavbar}>
          <Nav
            className={styles.headerNavbarMenu}
            onClick={handleNavClick}
            selectedKeys={[pathname]}
            defaultSelectedKeys={[pathname]}
            direction="hoz"
            activeDirection={null}
          >
            {headerMenuConfig
            && headerMenuConfig.length > 0
            && headerMenuConfig.map((nav) => {
              const linkProps = {};
              if (nav.external) {
                if (nav.newWindow) {
                  linkProps.target = '_blank';
                }
                linkProps.href = nav.path;
                return (
                  <NavItem key={nav.path} icon={nav.icon ? nav.icon : null}>
                    <a {...linkProps}>
                      <span>
                        {nav.name}
                      </span>
                    </a>
                  </NavItem>
                );
              }
              linkProps.to = nav.path;
              return (
                <NavItem key={nav.path} nav={nav.icon ? nav.icon : null}>
                  <Link {...linkProps}>
                    <span>
                      {nav.name}
                    </span>
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
          <Balloon
            trigger={(
              <div
                className={styles.iceDesignHeaderUserpannel}
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
                  <span className={styles.userDepartment}>
                    技术部
                  </span>
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
                  <Icon type="set" size="small" />
                  设置
                </Link>
              </li>
              <li className={styles.userProfileMenuItem}>
                <Link to="/user/login">
                  <Icon type="upload" size="small" />
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

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon, Message, Nav } from '@alifd/next';

import IceImg from '@icedesign/img';
import { headerMenuConfig } from '@/menuConfig';
import Logo from '../Logo';
import styles from './index.module.scss';

const { Item } = Nav;

const Header = (props) => {
  /**
   * 默认重定向到主页
   */
  const handleClick = (selectedKeys) => {
    const { history } = props;
    if (selectedKeys.key !== '/') {
      Message.success('可以使用 Iceworks 按需添加页面');
      history.push('/');
    }
  };

  const { location = {} } = props;
  const { pathname } = location;
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.headerNavbar}>
        <Nav
          className={styles.headerNavbarMenu}
          selectedKeys={[pathname]}
          defaultSelectedKeys={[pathname]}
          direction="hoz"
          type="secondary"
          onClick={handleClick}
        >
          {headerMenuConfig
            && headerMenuConfig.length > 0
            && headerMenuConfig.map((nav, index) => {
              if (nav.children && nav.children.length > 0) {
                return (
                  <Item
                    triggerType="click"
                    key={index}
                    title={(
                      <span>
                        {nav.icon ? (
                          <Icon size="small" type={nav.icon} />
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
                  </Item>
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
                          <Icon size="small" type={nav.icon} />
                        ) : null}
                        {nav.name}
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
                        <Icon size="small" type={nav.icon} />
                      ) : null}
                      {nav.name}
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
                <span className="user-name" style={{ fontSize: '13px' }}>
                  淘小宝
                </span>
                <br />
                <span className={styles.userDepartment}>技术部</span>
              </div>
              <Icon
                type="arrow-down"
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
              <Link to="/user/login">
                <Icon type="compass" size="small" />
                退出
              </Link>
            </li>
          </ul>
        </Balloon>
      </div>
    </div>
  );
};

export default withRouter(Header);

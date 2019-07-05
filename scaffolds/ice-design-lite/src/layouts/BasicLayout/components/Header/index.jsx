import React, { useEffect } from 'react';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { headerMenuConfig } from '@/menuConfig';
import stores from '@/stores/index';
import SelectLang from '@/components/SelectLang';
import Logo from '../Logo';

import styles from './index.module.scss';

function getLocaleKey(item) {
  return `app.header.${item.name}`;
}

export default function Header(props) {
  const { isMobile, className, style } = props;
  const userProfile = stores.useStore('userProfile');
  const { userinfo } = userProfile;
  const { name, department, avatar } = userinfo;

  useEffect(() => {
    userProfile.fetchData();
  }, []);

  return (
    <Layout.Header
      theme="dark"
      className={`${styles.iceDesignLayoutHeader} ${className}`}
      style={{ ...style }}
    >
      <Logo />

      <div className={styles.iceDesignLayoutHeaderMenu}>
        {/* Header 菜单项 begin */}
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <Nav direction="hoz" type="secondary" selectedKeys={[]}>
            {headerMenuConfig.map((nav, idx) => {
              const linkProps = {};
              if (nav.newWindow) {
                linkProps.href = nav.path;
                linkProps.target = '_blank';
              } else if (nav.external) {
                linkProps.href = nav.path;
              } else {
                linkProps.to = nav.path;
              }
              return (
                <Nav.Item key={idx} icon={nav.icon ? nav.icon : null}>
                  {linkProps.to ? (
                    <Link {...linkProps}>
                      {!isMobile ? <FormattedMessage id={getLocaleKey(nav)} /> : null}
                    </Link>
                  ) : (
                    <a {...linkProps}>
                      {!isMobile ? <FormattedMessage id={getLocaleKey(nav)} /> : null}
                    </a>
                  )}
                </Nav.Item>
              );
            })}
          </Nav>
        ) : null}
        {/* Header 菜单项 end */}

        {/* 多语言选择 */}
        <SelectLang />

        {/* Header 右侧内容块 */}
        <Balloon
          trigger={
            <div className={styles.iceDesignHeaderUserpannel}>
              <IceImg
                height={40}
                width={40}
                src={avatar}
                className={styles.userAvatar}
              />
              <div className={styles.userProfile}>
                <span className={styles.userName}>{name}</span>
                <br />
                <span className={styles.userDepartment}>{department}</span>
              </div>
              <Icon
                type="arrow-down"
                size="xxs"
                className={styles.iconDown}
              />
            </div>
          }
          closable={false}
          className={styles.userProfileMenu}
        >
          <ul>
            <li className={styles.userProfileMenuItem}>
              <Icon type="repair" size="small" />
              <FormattedMessage id="app.header.user.setting" />
            </li>
            <li className={styles.userProfileMenuItem}>
              <Icon type="compass" size="small" />
              <FormattedMessage id="app.header.user.logout" />
            </li>
          </ul>
        </Balloon>
      </div>
    </Layout.Header>
  );
}

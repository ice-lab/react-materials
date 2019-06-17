/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { useEffect } from 'react';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { headerMenuConfig } from '../../../../menuConfig';
import stores from '../../../../stores/index';
import SelectLang from '../../../../components/SelectLang';
import Logo from '../Logo';

import './scss/base.scss';

function getLocaleKey(item) {
  return `app.header.${item.name}`;
}

export default function Header(props) {
  const { isMobile, className, style } = props;
  const userProfile = stores.useStore('userProfile');
  const { name, department, avatar, fetchData } = userProfile;

  useEffect(() => {
    userProfile.fetchData();
  }, []);

  return (
    <Layout.Header
      theme={'dark'}
      className={cx('ice-design-layout-header', className)}
      style={{ ...style }}
    >
      <Logo />

      <div className="ice-design-layout-header-menu">
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
                <Nav.Item key={idx} icon={nav.icon ? nav.icon: null}>
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
            <div className="ice-design-header-userpannel">
              <IceImg
                height={40}
                width={40}
                src={avatar}
                className="user-avatar"
              />
              <div className="user-profile">
                <span className="user-name">{name}</span>
                <br />
                <span className="user-department">{department}</span>
              </div>
              <Icon
                type="arrow-down"
                size="xxs"
                className="icon-down"
              />
            </div>
          }
          closable={false}
          className="user-profile-menu"
        >
          <ul>
            <li className="user-profile-menu-item">
              <Icon type="repair" size="small" />
              <FormattedMessage id="app.header.user.setting" />
            </li>
            <li className="user-profile-menu-item">
              <Icon type="compass" size="small" />
              <FormattedMessage id="app.header.user.logout" />
            </li>
          </ul>
        </Balloon>
      </div>
    </Layout.Header>
  );
}

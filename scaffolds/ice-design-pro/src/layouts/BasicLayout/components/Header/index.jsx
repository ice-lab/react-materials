import React, { useEffect } from 'react';
import { Balloon, Nav, Message } from '@alifd/next';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { headerMenuConfig } from '@/menuConfig';
import stores from '@/stores/index';
import SelectLang from '@/components/SelectLang';
import Logo from '../Logo';

import styles from './index.module.scss';

function Header(props) {
  const userProfile = stores.useStore('userProfile');

  function getLocaleKey(item) {
    return `app.header.${item.name}`;
  }

  function handleSetting() {
    props.history.push('/account/setting');
  }

  async function handleLogout() {
    try {
      userProfile.logout(() => {
        Message.success('已登出');
        props.history.push('/user/login');
      });
    } catch (err) {
      console.log(err);
    }
  }

  const {
    isMobile,
    className,
    style,
    intl: { formatMessage },
  } = props;

  const { userinfo, fetchData } = userProfile;
  const { name, department, avatar } = userinfo;

  useEffect(() => {
    fetchData();
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
              const linkName = formatMessage({ id: getLocaleKey(nav) });
              return (
                <Nav.Item key={idx}>
                  {linkProps.to ? (
                    <Link {...linkProps}>
                      {nav.icon ? (
                        <FoundationSymbol type={nav.icon} size="small" />
                      ) : null}{' '}
                      {!isMobile ? linkName : null}
                    </Link>
                  ) : (
                    <a {...linkProps}>
                      {nav.icon ? (
                        <FoundationSymbol type={nav.icon} size="small" />
                      ) : null}{' '}
                      {!isMobile ? linkName : null}
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
                <span className={styles.userName}>
                  {name}
                </span>
                <br />
                <span className={styles.userDepartment}>
                  {department}
                </span>
              </div>
              <FoundationSymbol
                type="angle-down"
                size="small"
                className={styles.iconDown}
              />
            </div>
          }
          closable={false}
          className={styles.userProfileMenu}
        >
          <ul>
            <li
              className={styles.userProfileMenuItem}
              onClick={handleSetting}
            >
              <FoundationSymbol type="repair" size="small" />
              <FormattedMessage id="app.header.user.setting" />
            </li>
            <li
              className={styles.userProfileMenuItem}
              onClick={handleLogout}
            >
              <FoundationSymbol type="person" size="small" />
              <FormattedMessage id="app.header.user.logout" />
            </li>
          </ul>
        </Balloon>
      </div>
    </Layout.Header>
  );
}

export default injectIntl(withRouter(Header));


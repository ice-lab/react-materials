import React, { useEffect } from 'react';
import { Balloon, Nav, Message } from '@alifd/next';
import IceImg from '@icedesign/img';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { headerMenuConfig } from '@/config/menu.js';
import stores from '@/stores/index';
import SelectLang from '@/components/SelectLang';
import Auth from '@/components/Auth';
import { useRequest } from '@/utils/request';
import { userLogout } from '@/config/dataSource';
import Logo from '../Logo';

import styles from './index.module.scss';

/**
 * 根据权限决定是否渲染某个表单项
 * @param {object} item - 菜单项组件
 * @param {array} authorities - 菜单项允许权限数组
 * @return {object} 渲染的菜单项
 */
function renderAuthItem(item, authorities) {
  if (authorities) {
    return Auth({
      children: item,
      authorities,
      hidden: true,
    });
  } else {
    return item;
  }
}

function Header(props) {
  const { request } = useRequest(userLogout);
  const userProfile = stores.useStore('userProfile');
  const expandAside = stores.useStore('expandAside');

  function getLocaleKey(item) {
    return `app.header.${item.name}`;
  }

  function handleSetting() {
    props.history.push('/account/setting');
  }

  async function handleLogout() {
    try {
      await request();
      Message.success('已登出');
      props.history.push('/user/login');
    } catch (err) {
      console.error(err);
    }
  }

  const {
    isMobile,
    intl: { formatMessage },
  } = props;

  const { userinfo, fetchData } = userProfile;
  const { name, department, avatar } = userinfo;
  const { toggle } = expandAside;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.iceDesignLayoutHeader}>
      <div className={styles.headerLeft}>
        <Logo />
        <img onClick={() => toggle()} className={styles.expandIcon} width="20" height="20" src="https://img.alicdn.com/tfs/TB19Q3Qa.T1gK0jSZFhXXaAtVXa-32-32.svg" alt="expand icon" />
      </div>
      {/* Header 菜单项 begin */}
      <div className={styles.headerRight}>

        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <div className={styles.iceDesignLayoutHeaderMenu}>
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
                const item = (
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

                return renderAuthItem(item, nav.authorities);
              })}
            </Nav>
          </div>
        ) : null}
        {/* Header 菜单项 end */}

        <div className={styles.headerAction}>
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
                {
                  !isMobile && (
                    <div className={styles.userProfile}>
                      <span className={styles.userName}>
                        {name}
                      </span>
                      <br />
                      <span className={styles.userDepartment}>
                        {department}
                      </span>
                    </div>
                  )
                }
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

      </div>
    </div>
  );
}

export default injectIntl(withRouter(Header));


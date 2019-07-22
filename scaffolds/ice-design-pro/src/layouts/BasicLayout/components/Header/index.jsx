import React, { useEffect } from 'react';
import { Balloon, Nav, Message } from '@alifd/next';
import IceImg from '@icedesign/img';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { headerMenuConfig } from '@/config/menu.js';
import stores from '@/stores/index';
import SelectLang from '@/components/SelectLang';
import { useRequest } from '@/utils/request';
import { userLogout } from '@/config/dataSource';

import styles from './index.module.scss';

function Header(props) {
  const { request } = useRequest(userLogout);
  const userProfile = stores.useStore('userProfile');

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.iceDesignLayoutHeader}>

      {/* Header 菜单项 begin */}
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
  );
}

export default injectIntl(withRouter(Header));


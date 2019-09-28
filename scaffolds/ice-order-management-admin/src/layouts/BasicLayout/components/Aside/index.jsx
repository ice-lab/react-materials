import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import Logo from '../Logo';
import Notify from '@/components/Notify';
import { asideMenuConfig } from '@/config/menu.js';

import styles from './index.module.scss';

function BasicLayout(props) {
  const { location } = props;
  const { pathname } = location;

  return (
    <div className={styles.asideCustomMenu}>
      <Logo className={styles.menuLogo} />
      <div className={styles.userInfo}>
        <IceImg
          height={40}
          width={40}
          src="https://img.alicdn.com/tfs/TB1eyjzDkvoK1RjSZFDXXXY3pXa-600-600.png"
          className={styles.userAvatar}
        />
        <Notify className={styles.notify} />
        <div className={styles.userProfile}>
          <span className={styles.userName}>
            淘小宝
          </span>
          <br />
          <span className={styles.userDepartment}>技术部</span>
        </div>
      </div>

      <Nav
        mode="inline"
        selectedKeys={[pathname]}
        className={styles.iceMenuCustom}
        activeDirection="right"
      >
        {Array.isArray(asideMenuConfig)
          && asideMenuConfig.length > 0
          && asideMenuConfig.map((nav) => {
            return (
              <Nav.Item key={nav.path}>
                <Link to={nav.path} className={styles.iceMenuLink}>
                  {nav.icon ? (
                    <FoundationSymbol size="small" type={nav.icon} />
                  ) : null}
                  <span className={styles.iceMenuItemText}>{nav.name}</span>
                </Link>
              </Nav.Item>
            );
          })}
      </Nav>
    </div>
  );
}

export default withRouter(BasicLayout);

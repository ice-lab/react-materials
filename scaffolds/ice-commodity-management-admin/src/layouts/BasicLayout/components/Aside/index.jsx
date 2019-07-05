import React from 'react';
import { Nav } from '@alifd/next';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import { asideMenuConfig } from '@/config/menu';
import Logo from '../Logo';
import styles from './index.module.scss';

function BasicLayout(props) {
  const { location: { pathname } } = props;
  return (
    <div className={styles.asideCustomMenu}>
      <Logo
        style={{
          height: '62px',
          fontSize: '30px',
          marginRight: '0',
          background: '#fff',
          justifyContent: 'center',
          borderBottom: '1px solid #f5f5f5',
        }}
      />
      <div className={styles.userInfo}>
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
      </div>

      <Nav
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

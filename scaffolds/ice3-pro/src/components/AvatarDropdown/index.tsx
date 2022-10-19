import React from 'react';
import { history, useLocation } from 'ice';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import styles from './index.module.css';

interface AvatarDropdownProps {
  name: string;
  avatar: string;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ name, avatar }) => {
  const loginOut = () => {
    const pathname = history?.location?.pathname;
    history?.push({
      pathname: '/login',
      search: pathname ? `redirect=${pathname}` : '',
    })
  }

  const onMenuClick = React.useCallback((event: MenuInfo) => {
    const { key } = event;
    if (key === 'logout') {
      loginOut();
      return;
    }
  }, []);

  const menuOverlay = (
    <Menu
      onClick={onMenuClick}
      className={styles.menu}
      items={[
        { key: 'logout', label: '退出登录', icon: <LogoutOutlined /> },
      ]}
    />
  );

  return (
    <Dropdown overlay={menuOverlay}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={avatar} alt="avatar" />
        <span>{name}</span>
      </span>
    </Dropdown>
  )
}

export default AvatarDropdown;

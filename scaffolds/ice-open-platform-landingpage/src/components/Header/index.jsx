import React from 'react';
import { Nav } from '@alifd/next';
import { headerMenuConfig } from '@/config/menu.js';
import Logo from '../Logo';
import styles from './index.module.scss';

export default function Header() {
  const renderBalloonContent = (menu, idx) => {
    return (
      <Nav.SubNav key={idx} label={`${menu.name} `}>
        {menu.children.map((subMenu, index) => {
          return (
            <Nav.Item key={index}>
              <a href={subMenu.path} className={styles.customSubMenu}>
                {subMenu.name}
              </a>
            </Nav.Item>
          );
        })}
      </Nav.SubNav>
    );
  };

  const renderMenuItem = () => {
    return headerMenuConfig.map((menu, idx) => {
      if (menu.children) {
        return renderBalloonContent(menu, idx);
      }
      return (
        <Nav.Item key={menu.path}>
          <a href={menu.path}>{menu.name}</a>
        </Nav.Item>
      );
    });
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.headerNavbar}>
          <Nav className={styles.headerNavbarMenu} direction="hoz">
            {renderMenuItem()}
          </Nav>
        </div>
      </div>
    </div>
  );
}

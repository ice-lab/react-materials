import React from 'react';
import { Icon } from '@alifd/next';
import { Link } from 'react-router-dom';
import './index.scss';

export default () => {
  return (
    <div className="container">
      <Link to="/" className="logoLink">
        LOGO
      </Link>
      <ul className="navs">
        <li className="nav-menu" className="navMenu">
          <a href="#" className="navLink">
            <img
              src="https://img.alicdn.com/tfs/TB1crknwzDpK1RjSZFrXXa78VXa-32-32.png"
              alt=""
              className="internationalImg"
            />
            中国站
            <Icon type="arrow-up" size="xs" className="arrow-up-icon" />
            <Icon type="arrow-down" size="xs" className="arrow-down-icon" />
          </a>
          <ul className="sub-navs" className="subNavs">
            <li className="subNavMenu">
              <a href="#" className="subNavLink">
                International
              </a>
            </li>
            <li className="subNavMenu">
              <a href="#" className="subNavLink">
                日本サイト
              </a>
            </li>
          </ul>
        </li>
        <li className="navMenu">
          <a href="#" className="navLink">
            首页
          </a>
        </li>
      </ul>
    </div>
  );
};

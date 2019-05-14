import React from 'react';
import { Icon } from '@alifd/next';
import { Link } from 'react-router-dom';
import './index.modules.scss';

export default () => {
  return (
    <div className="stylescontainer">
      <Link to="/" className="styleslogoLink">
        LOGO
      </Link>
      <ul className="stylesnavs">
        <li className="nav-menu navMenu">
          <a href="#" className="stylesnavLink stylesNavIconLink">
            <img
              src="https://img.alicdn.com/tfs/TB1crknwzDpK1RjSZFrXXa78VXa-32-32.png"
              alt=""
              className="internationalImg"
            />
            中国站
            <Icon type="arrow-up" size="xs" className="arrow-up-icon" />
            <Icon type="arrow-down" size="xs" className="arrow-down-icon" />
          </a>
          <ul className="sub-navs" className="stylessubNavs">
            <li className="stylessubNavMenu">
              <a href="#" className="stylessubNavLink">
                International
              </a>
            </li>
            <li className="stylessubNavMenu">
              <a href="#" className="stylessubNavLink">
                日本サイト
              </a>
            </li>
          </ul>
        </li>
        <li className="navMenu">
          <a href="#" className="stylesnavLink">
            首页
          </a>
        </li>
      </ul>
    </div>
  );
};

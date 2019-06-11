import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon, Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import { headerMenuConfig } from '../../../../menuConfig';
import Logo from '../Logo';
import styles from './index.module.scss';

@withRouter
export default class Header extends Component {
  render() {
    const { location = {} } = this.props;
    const { pathname } = location;
    return (
      <div className={styles.headercontainer}>
        <div className={styles.headercontent}>
          <Logo style={{color :"#fff"}} isDark/>
          <div className={styles.headernavbar">
            <Nav
              className={styles.headernavbarmenu}
              onClick={this.handleNavClick}
              selectedKeys={[pathname]}
              defaultSelectedKeys={[pathname]}
              direction="hoz"
              type="secondary"
            >
              {headerMenuConfig &&
                headerMenuConfig.length > 0 &&
                headerMenuConfig.map((nav, index) => {
                  if (nav.children && nav.children.length > 0) {
                    return (
                      <Nav.SubNav
                        triggerType="click"
                        key={index}
                        title={
                          <span>
                            {nav.icon ? (
                              <FoundationSymbol size="small" type={nav.icon} />
                            ) : null}
                            <span>{nav.name}</span>
                          </span>
                        }
                      >
                        {nav.children.map((item) => {
                          const linkProps = {};
                          if (item.external) {
                            if (item.newWindow) {
                              linkProps.target = '_blank';
                            }

                            linkProps.href = item.path;
                            return (
                              <Nav.Item key={item.path}>
                                <a {...linkProps}>
                                  <span>{item.name}</span>
                                </a>
                              </Nav.Item>
                            );
                          }
                          linkProps.to = item.path;
                          return (
                            <Nav.Item key={item.path}>
                              <Link {...linkProps}>
                                <span>{item.name}</span>
                              </Link>
                            </Nav.Item>
                          );
                        })}
                      </Nav.SubNav>
                    );
                  }
                  const linkProps = {};
                  if (nav.external) {
                    if (nav.newWindow) {
                      linkProps.target = '_blank';
                    }
                    linkProps.href = nav.path;
                    return (
                      <Nav.Item key={nav.path}>
                        <a {...linkProps}>
                          <span>
                            {nav.icon ? (
                              <FoundationSymbol size="small" type={nav.icon} />
                            ) : null}
                            {nav.name}
                          </span>
                        </a>
                      </Nav.Item>
                    );
                  }
                  linkProps.to = nav.path;
                  return (
                    <Nav.Item key={nav.path}>
                      <Link {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          {nav.name}
                        </span>
                      </Link>
                    </Nav.Item>
                  );
                })}
            </Nav>
            <Balloon
              triggerType="click"
              trigger={
                <div
                  className={styles.icedesignheaderuserpannel}
                >
                  <IceImg
                    height={40}
                    width={40}
                    src={require('./images/avatar.png')}
                    className={styles.useravatar}
                  />
                  <div className={styles.userprofile}>
                    <span className={styles.username}>
                      淘小宝
                    </span>
                    <br />
                    <span className={styles.userdepartment}>技术部</span>
                  </div>
                  <Icon type="arrow-down" size="xxs" className={styles.icondown} />
                </div>
              }
              closable={false}
              className={styles.userprofilemenu}
            >
              <ul>
                <li className={styles.userprofilemenuitem}>
                  <Link to="/setting">
                    <FoundationSymbol type="repair" size="small" />
                    设置
                  </Link>
                </li>
                <li className={styles.userprofilemenuitem}>
                  <Link to="/user/login">
                    <FoundationSymbol type="compass" size="small" />
                    退出
                  </Link>
                </li>
              </ul>
            </Balloon>
          </div>
        </div>
      </div>
    );
  }
}

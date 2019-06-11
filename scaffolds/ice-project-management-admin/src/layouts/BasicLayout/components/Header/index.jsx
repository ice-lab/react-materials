import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Balloon, Icon, Nav } from "@alifd/next";
import IceImg from "@icedesign/img";
import { headerMenuConfig } from "../../../../menuConfig";
import Logo from "../Logo";
import styles from  "./index.module.scss";

const NavItem = Nav.Item;
const SubNav = Nav.SubNav;

@withRouter
export default class Header extends Component {
  render() {
    const { location = {} } = this.props;
    const { pathname } = location;
    return (
      <div className={styles.headercontainer}>
        <Logo isDark style={{color :"#fff"}}/>
        <div className={styles.headernavbar}>
          <Nav
            className={styles.headernavbarmenu}
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
                    <SubNav
                      triggerType="click"
                      key={index}
                      icon={nav.icon ? nav.icon : undefined}
                      title={nav.name}
                    >
                      {nav.children.map(item => {
                        const linkProps = {};
                        if (item.external) {
                          if (item.newWindow) {
                            linkProps.target = "_blank";
                          }

                          linkProps.href = item.path;
                          return (
                            <NavItem key={item.path}>
                              <a {...linkProps}>
                                <span>{item.name}</span>
                              </a>
                            </NavItem>
                          );
                        }
                        linkProps.to = item.path;
                        return (
                          <NavItem key={item.path}>
                            <Link {...linkProps}>
                              <span>{item.name}</span>
                            </Link>
                          </NavItem>
                        );
                      })}
                    </SubNav>
                  );
                }
                const linkProps = {};
                if (nav.external) {
                  if (nav.newWindow) {
                    linkProps.target = "_blank";
                  }
                  linkProps.href = nav.path;
                  return (
                    <NavItem
                      key={nav.path}
                      icon={nav.icon ? nav.icon : undefined}
                    >
                      <a {...linkProps}>{nav.name}</a>
                    </NavItem>
                  );
                }
                linkProps.to = nav.path;
                return (
                  <NavItem
                    key={nav.path}
                    icon={nav.icon ? nav.icon : undefined}
                  >
                    <Link {...linkProps}>{nav.name}</Link>
                  </NavItem>
                );
              })}
          </Nav>
          <Balloon
            triggerType="hover"
            trigger={
              <div className={styles.balloondiv}>
                <IceImg
                  height={40}
                  width={40}
                  src={require("./images/avatar.png")}
                  className={styles.useravatar}
                />
                <div className={styles.userprofile}>
                  <span className={styles.usernameuserspan}>
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
                <Link to="/user/login">
                  <Icon type="upload" size="xs" />
                  退出
                </Link>
              </li>
            </ul>
          </Balloon>
        </div>
      </div>
    );
  }
}

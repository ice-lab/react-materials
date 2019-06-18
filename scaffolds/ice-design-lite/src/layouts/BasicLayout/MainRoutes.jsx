import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Guide from '@/components/Guide';
import { asideMenuConfig } from '@/menuConfig';
import routerData from '@/routerConfig';

function MainRoutes() {
  /**
   * 根据菜单取得重定向地址.
   */
  function getRedirectData() {
    const redirectData = [];
    const getRedirect = (item) => {
      if (item && item.children) {
        if (item.children[0] && item.children[0].path) {
          redirectData.push({
            from: `${item.path}`,
            to: `${item.children[0].path}`,
          });
          item.children.forEach((children) => {
            getRedirect(children);
          });
        }
      }
    };

    asideMenuConfig.forEach(getRedirect);

    return redirectData;
  }

  /**
   * 渲染路由组件
   */
  function renderNormalRoute(item, index) {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ) : null;
  }

  const redirectData = getRedirectData();
  return (
    <Switch>
      {/* 渲染路由表 */}
      {routerData.map(renderNormalRoute)}

      {/* 路由重定向，嵌套路由默认重定向到当前菜单的第一个路由 */}
      {redirectData.map((item, index) => {
        return <Redirect key={index} exact from={item.from} to={item.to} />;
      })}

      {/* 首页默认重定向到 /dashboard */}
      <Redirect exact from="/" to="/dashboard/monitor" />

      {/* 未匹配到的路由重定向到 <Guide> 组件，实际情况应该重定向到 404 */}
      <Route component={Guide} />
    </Switch>
  );
}

export default MainRoutes;

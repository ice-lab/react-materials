import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import routerConfig from '../../routerConfig';
import Guide from '../../components/Guide';

export default function MainRoutes() {
  /**
   * render normal route
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
  };

  return (
    <Switch>
      {/* 渲染路由表 */}
      {routerConfig.map(renderNormalRoute)}

      {/* 首页默认重定向到 /dashboard */}
      <Redirect exact from="/" to="/dashboard" />

      {/* 未匹配到的路由重定向到 <Guide> 组件，实际情况应该重定向到 404 */}
      <Route component={Guide} />
    </Switch>
  );
}

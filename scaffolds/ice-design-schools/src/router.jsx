/**
 * 定义应用路由
 */
import { HashRouter, Switch, Route } from '_react-router-dom@4.3.1@react-router-dom';
import React from '_react@16.8.6@react';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

// 按照 Layout 分组路由
// Index 对应的路由：/user/xxx
// Index 对应的路由：/xxx
const router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </HashRouter>
  );
};

export default router();

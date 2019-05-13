/**
 * 定义应用路由
 */
import { HashRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout/index';

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

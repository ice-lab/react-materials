import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, HashRouter } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={BasicLayout} />
    </Switch>
  </HashRouter>,

  ICE_CONTAINER
);

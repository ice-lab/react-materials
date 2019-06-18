import React from 'react';
import ReactDOM from 'react-dom';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';

import LanguageProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';
import router from './router';

const locale = getLocale();
const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(
  <LanguageProvider locale={locale}>
    {router()}
  </LanguageProvider>,

  ICE_CONTAINER
);

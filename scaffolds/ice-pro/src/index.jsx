import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';

// 引入基础配置文件
import router from './router';
import LanguageProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';

const locale = getLocale();
const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(<LanguageProvider locale={locale}>{router()}</LanguageProvider>, ICE_CONTAINER);

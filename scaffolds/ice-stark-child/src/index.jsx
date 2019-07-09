import ReactDOM from 'react-dom';
import { getMountNode } from '@ice/stark';

// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';

import router from './router';

ReactDOM.render(router(), getMountNode());

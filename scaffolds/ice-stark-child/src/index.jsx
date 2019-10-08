import ReactDOM from 'react-dom';
import { getMountNode, registerAppLeave } from '@ice/stark-app';

// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';

import router from './router';

// make sure the unmount event is triggered
registerAppLeave(() => {
  ReactDOM.unmountComponentAtNode(getMountNode());
});

ReactDOM.render(router(), getMountNode());

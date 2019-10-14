import ReactDOM from 'react-dom';
import { getMountNode, registerAppLeave } from '@ice/stark-app';

import router from './router';

// make sure the unmount event is triggered
registerAppLeave(() => {
  ReactDOM.unmountComponentAtNode(getMountNode());
});

ReactDOM.render(router(), getMountNode());

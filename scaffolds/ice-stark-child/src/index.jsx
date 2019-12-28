import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import './global.scss';
import router from './router';

if (isInIcestark()) {
  const mountNode = getMountNode();

  registerAppEnter(() => {
    ReactDOM.render(router(), mountNode);
  });

  // make sure the unmount event is triggered
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(mountNode);
  });
} else {
  ReactDOM.render(router(), document.getElementById('ice-container'));
}

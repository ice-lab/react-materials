import ReactDOM from 'react-dom';
import { getMountNode, registerAppLeave } from '@ice/stark-app';
import './global.scss';
import router from './router';

const mountNode = getMountNode();

// trigger unmount manually
registerAppLeave(() => {
  ReactDOM.unmountComponentAtNode(mountNode);
});

ReactDOM.render(router(), mountNode);

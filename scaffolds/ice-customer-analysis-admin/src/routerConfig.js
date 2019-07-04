// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Analysis from './pages/Analysis';
import Schedule from './pages/Schedule';
import Conversion from './pages/Conversion';
import NotFound from './components/NotFound';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: UserLogin,
      },
      {
        path: '/register',
        component: UserRegister,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/analysis',
        component: Analysis,
      },
      {
        path: '/schedule',
        component: Schedule,
      },
      {
        path: '/conversion',
        component: Conversion,
      },
      {
        path: '/',
        redirect: '/analysis',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

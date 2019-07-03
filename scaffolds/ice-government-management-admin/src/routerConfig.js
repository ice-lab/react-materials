// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import Dismantling from './pages/Dismantling';
import Allocation from './pages/Allocation';
import Selfhelp from './pages/Selfhelp';
import List from './pages/List';
import Batch from './pages/Batch';
import NewCase from './pages/NewCase';

import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

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
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/dismantling',
        component: Dismantling,
      },
      {
        path: '/allocation',
        component: Allocation,
      },
      {
        path: '/selfHelp',
        component: Selfhelp,
      },
      {
        path: '/list',
        component: List,
      },
      {
        path: '/batch',
        component: Batch,
      },
      {
        path: '/new',
        component: NewCase,
      },
    ],
  },
];

export default routerConfig;

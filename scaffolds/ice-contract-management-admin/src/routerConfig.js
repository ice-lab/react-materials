// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import ContractCenter from './pages/ContractCenter';
import MyContract from './pages/MyContract';
import ContractSearch from './pages/ContractSearch';
import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

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
    ]
  },
  {
    path: '/contract',
    component: BasicLayout,
    children: [
      {
        path: '/my',
        component: MyContract,
      },
      {
        path: '/search',
        component: ContractSearch,
      },
      {
        path: '/index',
        component: ContractCenter,
      },
      {
        path: '/',
        redirect: '/contract/index',
      },
    ]
  },
];

export default routerConfig;

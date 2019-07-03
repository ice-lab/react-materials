// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import LibManagement from './pages/LibManagement';
import LibBorrow from './pages/LibBorrow';
import LibRecommend from './pages/LibRecommend';
import LibDonation from './pages/LibDonation';
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
        path: '/dashboard',
        component: LibManagement,
      },
      {
        path: '/borrow',
        component: LibBorrow,
      },
      {
        path: '/recommend',
        component: LibRecommend,
      },
      {
        path: '/donation',
        component: LibDonation,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

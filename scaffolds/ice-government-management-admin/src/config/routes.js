
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import Dismantling from '@/pages/Dismantling';
import Allocation from '@/pages/Allocation';
import Selfhelp from '@/pages/Selfhelp';
import List from '@/pages/List';
import Batch from '@/pages/Batch';
import NewCase from '@/pages/NewCase';
import NotFound from '@/pages/NotFound';

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

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

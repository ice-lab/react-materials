import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Setting from '@/pages/Setting';
import Dashboard from '@/pages/Dashboard';
import Builder from '@/pages/Builder';
import Task from '@/pages/Task';
import New from '@/pages/New';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [{
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
    }],
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
        path: '/builder',
        component: Builder,
      },
      {
        path: '/task',
        component: Task,
      },
      {
        path: '/new',
        component: New,
      },
      {
        path: '/setting',
        component: Setting,
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

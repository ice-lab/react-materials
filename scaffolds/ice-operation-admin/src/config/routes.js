import UserLayout from '@/layouts/UserLayout';
import BaseLayout from '@/layouts/BaseLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import Edit from '@/pages/Edit';
import View from '@/pages/View';
import NotFound from '@/pages/NotFound';

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
    component: BaseLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/edit',
        component: Edit,
      },
      {
        path: '/view',
        component: View,
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

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Analysis from '@/pages/Analysis';
import Schedule from '@/pages/Schedule';
import Conversion from '@/pages/Conversion';
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

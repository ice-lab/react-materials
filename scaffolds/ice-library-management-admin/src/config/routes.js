import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import LibManagement from '@/pages/LibManagement';
import LibBorrow from '@/pages/LibBorrow';
import LibRecommend from '@/pages/LibRecommend';
import LibDonation from '@/pages/LibDonation';
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

import ModelManagement from '@/pages/ModelManagement';
import ModelMarket from '@/pages/ModelMarket';
import ModelPerformance from '@/pages/ModelPerformance';
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Setting from '@/pages/Setting';
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
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/management',
        component: ModelManagement,
      },
      {
        path: '/market',
        component: ModelMarket,
      },
      {
        path: '/performance',
        component: ModelPerformance,
      },
      {
        path: '/setting',
        component: Setting,
      },
      {
        path: '/',
        redirect: '/management',
      },
    ],
  },
];

export default routerConfig;

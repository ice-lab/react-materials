import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import Goods from '@/pages/Goods';
import OrderList from '@/pages/OrderList';
import Trade from '@/pages/Trade';
import Customer from '@/pages/Customer';
import Statcenter from '@/pages/Statcenter';
import Setting from '@/pages/Setting';
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
        component: Dashboard,
      },
      {
        path: '/trade',
        component: Trade,
      },
      {
        path: '/goods',
        component: Goods,
      },
      {
        path: '/orderlist',
        component: OrderList,
      },
      {
        path: '/customer',
        component: Customer,
      },
      {
        path: '/statcenter',
        component: Statcenter,
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

import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import Reserve from './pages/Reserve';
import Asset from './pages/Asset';
import OrderList from './pages/OrderList';
import Goods from './pages/Goods';
import Membership from './pages/Membership';
import AddReserve from './pages/AddReserve';
import AddGoods from './pages/AddGoods';
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
        component: Dashboard,
      },
      {
        path: '/reserve',
        component: Reserve,
      },
      {
        path: '/asset',
        component: Asset,
      },
      {
        path: '/goods',
        component: Goods,
      },
      {
        path: '/order',
        component: OrderList,
      },
      {
        path: '/membership',
        component: Membership,
      },
      {
        path: '/add/reserve',
        component: AddReserve,
      },
      {
        path: '/add/goods',
        component: AddGoods,
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

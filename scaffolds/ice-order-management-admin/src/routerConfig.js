// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import OrderReport from '@/pages/OrderReport';
import OrderList from '@/pages/OrderList';
import ChargeBack from '@/pages/ChargeBack';
import Dispatch from '@/pages/Dispatch';
import Goods from '@/pages/Goods';
import AddOrder from '@/pages/AddOrder';
import AddGoods from '@/pages/AddGoods';

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
        path: '/order/report',
        component: OrderReport,
      },
      {
        path: '/order/list',
        component: OrderList,
      },
      {
        path: '/chargeback',
        component: ChargeBack,
      },
      {
        path: '/dispatch',
        component: Dispatch,
      },
      {
        path: '/goods',
        component: Goods,
      },
      {
        path: '/add/order',
        component: AddOrder,
      },
      {
        path: '/add/goods',
        component: AddGoods,
      },
    ],
  },
];

export default routerConfig;

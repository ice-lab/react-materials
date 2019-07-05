
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import ContractCenter from '@/pages/ContractCenter';
import MyContract from '@/pages/MyContract';
import ContractSearch from '@/pages/ContractSearch';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

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
        path: '/contract/my',
        component: MyContract,
      },
      {
        path: '/contract/search',
        component: ContractSearch,
      },
      {
        path: '/contract/index',
        component: ContractCenter,
      },
      {
        path: '/',
        redirect: '/contract/index',
      },
    ],
  },
];

export default routerConfig;

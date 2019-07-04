import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import MySetting from '@/pages/MySetting';
import InviteList from '@/pages/InviteList';
import AddInvite from '@/pages/AddInvite';
import InviteTeam from '@/pages/InviteTeam';
import TopicList from '@/pages/TopicList';
import AddTopic from '@/pages/AddTopic';
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
        path: '/invite/list',
        component: InviteList,
      },
      {
        path: '/invite/team',
        component: InviteTeam,
      },
      {
        path: '/invite/add',
        component: AddInvite,
      },
      {
        path: '/topic/list',
        component: TopicList,
      },
      {
        path: '/topic/add',
        component: AddTopic,
      },
      {
        path: '/setting/my',
        component: MySetting,
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

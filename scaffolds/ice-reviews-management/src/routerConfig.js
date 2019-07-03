// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import MySetting from './pages/MySetting';
import InviteList from './pages/InviteList';
import AddInvite from './pages/AddInvite';
import InviteTeam from './pages/InviteTeam';
import TopicList from './pages/TopicList';
import AddTopic from './pages/AddTopic';
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

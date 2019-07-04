// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import NewPost from './pages/NewPost';
import HotPost from './pages/HotPost';
import Status from './pages/Status';
import Settings from './pages/Settings';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
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
        path: '/post/list',
        component: PostList,
      },
      {
        path: '/post/new',
        component: NewPost,
      },
      {
        path: '/post/analysis',
        component: HotPost,
      },
      {
        path: '/account/my',
        component: Status,
      },
      {
        path: '/account/settings',
        component: Settings,
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

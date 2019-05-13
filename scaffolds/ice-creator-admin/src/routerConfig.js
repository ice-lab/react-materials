// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Dashboard from './pages/Dashboard/index';
import PostList from './pages/PostList/index';
import NewPost from './pages/NewPost/index';
import HotPost from './pages/HotPost/index';
import Status from './pages/Status/index';
import Settings from './pages/Settings/index';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister/index';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
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
];

export default routerConfig;

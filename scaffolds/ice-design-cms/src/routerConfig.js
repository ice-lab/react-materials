import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import PostList from '@/pages/PostList';
import CreatePost from '@/pages/CreatePost';
import CateList from '@/pages/CateList';
import CreateCate from '@/pages/CreateCate';
import TagList from '@/pages/TagList';
import CreateTag from '@/pages/CreateTag';
import UserList from '@/pages/UserList';
import CreateUser from '@/pages/CreateUser';
import EditPassword from '@/pages/EditPassword';
import BasicSetting from '@/pages/BasicSetting';
import NavigationSetting from '@/pages/NavigationSetting';
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
        path: '/dashboard/monitor',
        component: Dashboard,
      },
      {
        path: '/setting/basic',
        component: BasicSetting,
      },
      {
        path: '/setting/navigation',
        component: NavigationSetting,
      },
      {
        path: '/users/list',
        component: UserList,
      },
      {
        path: '/users/create',
        component: CreateUser,
      },
      {
        path: '/users/pwd',
        component: EditPassword,
      },
      {
        path: '/tag/list',
        component: TagList,
      },
      {
        path: '/tag/create',
        component: CreateTag,
      },
      {
        path: '/cate/list',
        component: CateList,
      },
      {
        path: '/cate/create',
        component: CreateCate,
      },
      {
        path: '/post/list',
        component: PostList,
      },
      {
        path: '/post/create',
        component: CreatePost,
      },
      {
        path: '/',
        redirect: '/dashboard/monitor',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

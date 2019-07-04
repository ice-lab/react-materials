// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import NotFound from './components/NotFound';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import TaskBoard from './pages/TaskBoard';
import TaskStatus from './pages/TaskStatus';
import MemberList from './pages/MemberList';
import AddMember from './pages/AddMember';
import ProjectList from './pages/ProjectList';
import AddProject from './pages/AddProject';

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
        path: '/taskboard',
        component: TaskBoard,
      },
      {
        path: '/member/list',
        component: MemberList,
      },
      {
        path: '/add/member',
        component: AddMember,
      },
      {
        path: '/task/status',
        component: TaskStatus,
      },
      {
        path: '/project/list',
        component: ProjectList,
      },
      {
        path: '/add/project',
        component: AddProject,
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


import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Projects from '@/pages/Projects';
import Skill from '@/pages/Skill';
import Entities from '@/pages/Entities';
import Repository from '@/pages/Repository';
import Generalization from '@/pages/Generalization';
import Function from '@/pages/Function';
import Publish from '@/pages/Publish';
import Analysis from '@/pages/Analysis';
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
        component: Projects,
      },
      {
        path: '/skill',
        component: Skill,
      },
      {
        path: '/entities',
        component: Entities,
      },
      {
        path: '/repository',
        component: Repository,
      },
      {
        path: '/repository',
        component: Repository,
      },
      {
        path: '/generalization',
        component: Generalization,
      },
      {
        path: '/function',
        component: Function,
      },
      {
        path: '/publish',
        component: Publish,
      },
      {
        path: '/analysis',
        component: Analysis,
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

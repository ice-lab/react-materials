import BasicLayout from '@/layouts/BasicLayout';

import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import ProjectList from '@/pages/ProjectList';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/project/detail',
        component: ProjectDetail
      },
      {
        path: '/project/list',
        component: ProjectList
      },
      {
        path: '/',
        redirect: '/home'
      }
    ]
  }
];

export default routerConfig;

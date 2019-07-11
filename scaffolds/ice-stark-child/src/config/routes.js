import BasicLayout from '@/layouts/BasicLayout';

import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import List from '@/pages/List';

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
        path: '/detail',
        component: Detail
      },
      {
        path: '/list',
        component: List
      },
      {
        path: '/',
        redirect: '/home'
      }
    ]
  }
];

export default routerConfig;

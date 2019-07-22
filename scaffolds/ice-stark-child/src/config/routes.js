import BasicLayout from '@/layouts/BasicLayout';

import Detail from '@/pages/Detail';
import List from '@/pages/List';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/list',
        component: List,
      },
      {
        path: '/detail',
        component: Detail,
      },
      {
        path: '/',
        redirect: '/list',
      },
    ],
  },
];

export default routerConfig;

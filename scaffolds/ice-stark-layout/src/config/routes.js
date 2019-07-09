import BasicLayout from '@/layouts/BasicLayout';
import Index from '@/pages/Index';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Index,
      },
    ],
  },
];

export default routerConfig;

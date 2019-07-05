
import HomePage from '@/pages/HomePage';
import BlankLayout from '@/layouts/BlankLayout';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '/',
        component: HomePage,
      },
    ],
  },
];

export default routerConfig;

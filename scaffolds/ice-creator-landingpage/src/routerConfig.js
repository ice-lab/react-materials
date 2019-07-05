import BasicLayout from '@/layouts/BlankLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/',
        redirect: '/home',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

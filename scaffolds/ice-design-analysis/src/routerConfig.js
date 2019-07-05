import BlankLayout from '@/layouts/BlankLayout';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
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

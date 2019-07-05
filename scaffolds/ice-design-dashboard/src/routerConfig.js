
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';
import BlankLayout from '@/layouts/BlankLayout';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [{
      path: '/dashboard',
      component: Dashboard,
    }, {
      path: '/',
      redirect: '/dashboard',
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;

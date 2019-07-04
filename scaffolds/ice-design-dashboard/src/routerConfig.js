
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
      component: NotFound,
    }],
  },
];

export default routerConfig;

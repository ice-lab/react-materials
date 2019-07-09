
import BlankLayout from '@/layouts/BlankLayout';
import Home from '@/pages/Home';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '/',
        component: Home,
      },
    ],
  },
];

export default routerConfig;

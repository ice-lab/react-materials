import HeaderFooterLayout from '@/layouts/HeaderFooterLayout';

import Home from '@/pages/Home';
import Guests from '@/pages/Guests';
import Partner from '@/pages/Partner';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: HeaderFooterLayout,
    children: [
      {
        path: '/guests',
        component: Guests,
      },
      {
        path: '/partner',
        component: Partner,
      },
      {
        path: '/',
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

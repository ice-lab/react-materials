import React from 'react';

import BasicLayout from './layouts/BasicLayout';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/',
        redirect: '/dashboard'
      },
      {
        component: NotFound,
      }
    ]
  }
];

export default routerConfig;

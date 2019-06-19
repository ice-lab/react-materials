import React from 'react';

import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

const UserLogin = React.lazy(() => import('./pages/UserLogin'));
const UserRegister = React.lazy(() => import('./pages/UserRegister'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Charts = React.lazy(() => import('./pages/Charts'));
const BasicCharts = React.lazy(() => import('./pages/BasicCharts'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Result = React.lazy(() => import('./pages/Result'));
const BasicList = React.lazy(() => import('./pages/BasicList'));
const ProjectList = React.lazy(() => import('./pages/ProjectList'));
const BasicTable = React.lazy(() => import('./pages/BasicTable'));
const GeneralTable = React.lazy(() => import('./pages/GeneralTable'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Setting = React.lazy(() => import('./pages/Setting'));
const Fail = React.lazy(() => import('./pages/Fail'));
const Empty = React.lazy(() => import('./pages/Exception/Empty'));
const Forbidden = React.lazy(() => import('./pages/Exception/Forbidden'));
const NotFound = React.lazy(() => import('./pages/Exception/NotFound'));
const ServerError = React.lazy(() => import('./pages/Exception/ServerError'));

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: UserLogin,
      },
      {
        path: '/register',
        component: UserRegister,
      },
      {
        from: '/user',
        to: '/user/login'
      },
      {
        component: NotFound,
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard/monitor',
        component: Dashboard,
      },
      {
        path: '/dashboard/monitor',
        component: Dashboard,
      },
      {
        path: '/list/basic',
        component: BasicList,
      },
      {
        path: '/list/general',
        component: ProjectList,
      },
      {
        path: '/result/success',
        component: Result,
      },
      {
        path: '/result/fail',
        component: Fail,
      },
      {
        path: '/table/basic',
        component: BasicTable,
      },
      {
        path: '/profile/basic',
        component: Profile,
      },
      {
        path: '/profile/general',
        component: Terms,
      },
      {
        path: '/table/general',
        component: GeneralTable,
      },
      {
        path: '/account/setting',
        component: Setting,
      },
      {
        path: '/exception/500',
        component: ServerError,
      },
      {
        path: '/exception/403',
        component: Forbidden,
      },
      {
        path: '/exception/204',
        component: Empty,
      },
      {
        path: '/exception/404',
        component: NotFound,
      },
      {
        from: '/',
        to: '/dashboard/monitor'
      },
      {
        component: NotFound,
      }
    ]
  },
];

export default routerConfig;

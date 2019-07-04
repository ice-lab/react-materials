import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import Dashboard from '@/pages/Dashboard';
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Holidays from '@/pages/Holidays';
import Events from '@/pages/Events';
import Activites from '@/pages/Activites';
import Departments from '@/pages/Departments';
import Employee from '@/pages/Employee';
import AddEmployee from '@/pages/AddEmployee';
import Analysis from '@/pages/Analysis';
import Setting from '@/pages/Setting';
import NotFound from '@/pages/NotFound';

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
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/holidays',
        component: Holidays,
      },
      {
        path: '/events',
        component: Events,
      },
      {
        path: '/activites',
        component: Activites,
      },
      {
        path: '/departments',
        component: Departments,
      },
      {
        path: '/employee',
        component: Employee,
      },
      {
        path: '/add/employee',
        component: AddEmployee,
      },
      {
        path: '/analysis',
        component: Analysis,
      },
      {
        path: '/setting',
        component: Setting,
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

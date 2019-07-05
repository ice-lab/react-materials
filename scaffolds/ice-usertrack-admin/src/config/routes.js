import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Home from '@/pages/Home';
import Scheme from '@/pages/Scheme';
import Combine from '@/pages/Combine';
import AutoTest from '@/pages/AutoTest';
import Report from '@/pages/Report';
import Snapshot from '@/pages/Snapshot';
import Monitor from '@/pages/Monitor';
import MonitorDetail from '@/pages/MonitorDetail';
import Setting from '@/pages/Setting';
import EditForm from '@/pages/EditForm';
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
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/application/mobile',
        component: Home,
      },
      {
        path: '/application/monitor',
        component: MonitorDetail,
      },
      {
        path: '/application/edit',
        component: EditForm,
      },
      {
        path: '/maintain/scheme',
        component: Scheme,
      },
      {
        path: '/maintain/combine',
        component: Combine,
      },
      {
        path: '/validate/autotest',
        component: AutoTest,
      },
      {
        path: '/validate/report',
        component: Report,
      },
      {
        path: '/monitor/snapshot',
        component: Snapshot,
      },
      {
        path: '/monitor/version',
        component: Monitor,
      },
      {
        path: '/account/setting',
        component: Setting,
      },
      {
        path: '/',
        redirect: '/application/monitor',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

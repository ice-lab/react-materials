import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Business from '@/pages/Business';
import DataCenter from '@/pages/DataCenter';
import TrafficStatistics from '@/pages/TrafficStatistics';
import UserStatistics from '@/pages/UserStatistics';
import UserActivities from '@/pages/UserActivities';
import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Setting from '@/pages/Setting';
import NotFound from '@/pages/NotFound';

const routerConfig = [{
  path: '/account',
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
      redirect: '/account/login',
    },
    {
      component: NotFound,
    },
  ],
}, {
  path: '/',
  component: BasicLayout,
  children: [
    {
      path: '/user/statistics',
      component: UserStatistics,
    },
    {
      path: '/user/activities',
      component: UserActivities,
    },
    {
      path: '/dashboard',
      component: Business,
    },
    {
      path: '/traffic/statistics',
      component: TrafficStatistics,
    },
    {
      path: '/datacenter',
      component: DataCenter,
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
}];

export default routerConfig;

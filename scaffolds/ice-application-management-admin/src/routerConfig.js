import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Account from '@/pages/Account';
import Query from '@/pages/Query';
import UserLogin from '@/pages/UserLogin';
import App from '@/pages/App';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

const routerConfig = [{
  path: '/user',
  component: UserLayout,
  children: [{
    path: '/login',
    component: UserLogin,
  }, {
    path: '/',
    redirect: '/user/login',
  }],
}, {
  path: '/',
  component: BasicLayout,
  children: [{
    path: '/dashboard',
    component: Home,
  }, {
    path: '/account',
    component: Account,
  }, {
    path: '/query',
    component: Query,
  }, {
    path: '/app',
    component: App,
  }, {
    path: '/',
    redirect: '/dashboard',
  }, {
    component: NotFound,
  }],
}];

export default routerConfig;

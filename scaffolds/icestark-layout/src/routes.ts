import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routes: IRouterConfig[] = [{
  path: '/about',
  component: About,
}, {
  path: '/login',
  component: Login,
}, {
  path: '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;

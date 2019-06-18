const routerConfig = [
  {
    path: '/',
    component: 'pages/Dashboard/index.jsx',
    layout: 'layouts/BasicLayout',
    exact: true
  }, {
    path: '/dashboard',
    component: 'pages/Dashboard/index.jsx',
    layout: 'layouts/BasicLayout',
  }, {
    component: 'components/NotFound/index.jsx',
    layout: 'layouts/BasicLayout',
  }
];

export default routerConfig;

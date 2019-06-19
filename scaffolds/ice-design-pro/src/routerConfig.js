const routerConfig = [
  {
    path: '/user',
    component: 'layouts/UserLayout',
    children: [
      {
        path: '/login',
        component: 'pages/UserLogin',
      },
      {
        path: '/register',
        component: 'pages/UserRegister',
      },
    ]
  }
];

export default routerConfig;

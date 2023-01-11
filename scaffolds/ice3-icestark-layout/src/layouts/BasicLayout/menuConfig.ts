const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
    framework: true,
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
    framework: true,
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account',
    framework: true,
  },
  {
    name: 'Angular',
    icon: 'set',
    children: [
      {
        path: '/angular',
        name: 'router contact',
      },
      {
        path: '/angular/detail',
        name: 'router detail',
      },
    ],
  },
  {
    name: 'React 微应用',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '首页',
      },
      {
        path: '/seller/list',
        name: '列表',
      },
      {
        path: '/seller/detail',
        name: '详情',
      },
      {
        path: '/seller/404',
        name: '404',
      },
    ],
  },
  {
    name: 'Vue 微应用',
    icon: 'account',
    children: [
      {
        path: '/waiter',
        name: '首页',
      },
      {
        path: '/waiter/list',
        name: '列表',
      },
      {
        path: '/waiter/detail',
        name: '详情',
      },
      {
        path: '/waiter/404',
        name: '404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };

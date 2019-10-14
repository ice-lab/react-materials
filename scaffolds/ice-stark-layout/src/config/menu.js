// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'email',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'help',
  },
];

const asideMenuConfig = [
  {
    name: '通用页面',
    path: '/',
    icon: 'Item',
    checkSelected: (pathname) => {
      return ['', '/', '/message', '/about'].indexOf(pathname) !== -1;
    },
    children: [
      {
        path: '/',
        name: '站点首页',
      },
      {
        path: '/message',
        name: '消息页面',
      },
      {
        path: '/about',
        name: '关于页面',
      },
    ],
  },
  {
    name: '商家平台',
    path: '/seller',
    icon: 'Item',
    children: [
      {
        path: '/seller',
        name: '商家首页',
      },
      {
        path: '/seller/list',
        name: '商家列表',
      },
      {
        path: '/seller/detail',
        name: '商家详情',
      },
      {
        path: '/seller/404',
        name: '商家 404',
      },
    ],
  },
  {
    name: '小二平台',
    path: '/waiter',
    icon: 'Item',
    children: [
      {
        path: '/waiter',
        name: '小二首页',
      },
      {
        path: '/waiter/list',
        name: '小二列表',
      },
      {
        path: '/waiter/detail',
        name: '小二详情',
      },
      {
        path: '/waiter/404',
        name: '小二 404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };

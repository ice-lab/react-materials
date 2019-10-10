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
    key: 'common',
    path: '/',
    icon: 'Item',
  },
  {
    name: '商家平台',
    key: 'merchant',
    path: '/#/seller',
    icon: 'Item',
  },
  {
    name: '小二平台',
    key: 'waiter',
    path: '/waiter/list',
    icon: 'Item1',
  },
];

const asideLocalMenu = [
  {
    name: '通用页面',
    key: 'common',
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
    key: 'seller',
    children: [
      {
        path: '/#/seller',
        name: '站点首页',
      },
      {
        path: '/#/seller/list',
        name: '商家列表',
      },
      {
        path: '/#/seller/detail',
        name: '商家详情',
      },
    ],
  },
  {
    name: '小二平台',
    key: 'waiter',
    children: [
      {
        path: '/waiter/list',
        name: '小二列表',
      },
      {
        path: '/waiter/detail',
        name: '小二详情',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig, asideLocalMenu };

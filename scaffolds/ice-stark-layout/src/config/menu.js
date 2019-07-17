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
    name: '商家平台',
    key: 'merchant',
    path: '/list',
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
    name: '商家平台',
    key: 'merchant',
    children: [
      {
        path: '/list',
        name: '商家列表',
      },
      {
        path: '/detail',
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

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
    name: 'App1 (A仓库)',
    key: 'A',
    path: '/',
    icon: 'Item',
  },
  {
    name: 'App2 (B仓库)',
    key: 'B',
    path: '/user/home',
    icon: 'Item1',
  },
];

const asideLocalMenu = [
  {
    name: 'Local NavA',
    children: [
      {
        path: '/home',
        name: 'home',
      },
      {
        path: '/about',
        name: 'about',
      },
    ],
  },
  {
    name: 'Local NavB',
    children: [
      {
        path: '/user/home',
        name: 'home',
      },
      {
        path: '/user/edit',
        name: 'edit',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig, asideLocalMenu };

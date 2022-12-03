const asideMenuConfig = [
  {
    name: '工作台',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: '表单',
    path: '/form',
    icon: 'copy',
  },
  {
    name: '列表',
    path: '/list',
    icon: 'chart-bar',
  },
  {
    name: '结果&异常',
    icon: 'warning',
    children: [
      {
        name: '成功',
        path: '/success',
      },
      {
        name: '404',
        path: '/404',
      },
    ],
  },
];

export { asideMenuConfig };

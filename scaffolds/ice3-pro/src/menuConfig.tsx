import { TableOutlined, WarningOutlined, FormOutlined, DashboardOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-layout';

const asideMenuConfig: MenuDataItem[] = [
  {
    name: '工作台',
    path: '/',
    icon: <DashboardOutlined />,
  },
  {
    name: '表单',
    path: '/form',
    icon: <FormOutlined />,
  },
  {
    name: '列表',
    path: '/list',
    icon: <TableOutlined />,
  },
  {
    name: '结果&异常',
    icon: <WarningOutlined />,
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

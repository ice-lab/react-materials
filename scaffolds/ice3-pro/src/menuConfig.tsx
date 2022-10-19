import { TableOutlined, WarningOutlined, DashboardOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <DashboardOutlined />,
  },
  {
    name: 'List',
    path: '/list',
    icon: <TableOutlined />,
  },
  {
    name: '404',
    path: '/404',
    icon: <WarningOutlined />,
  },
];

export { asideMenuConfig };

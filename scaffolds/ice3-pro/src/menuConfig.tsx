import { TableOutlined, WarningOutlined, FormOutlined, DashboardOutlined } from '@ant-design/icons';

const asideMenuConfig = [
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
    name: '404',
    path: '/404',
    icon: <WarningOutlined />,
  },
];

export { asideMenuConfig };

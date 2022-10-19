import { SmileOutlined, HeartOutlined, DashboardOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <DashboardOutlined />,
    component: './Dashboard',
  },
  {
    name: 'Admin',
    path: '/admin',
    icon: <DashboardOutlined />,
    component: './Admin',

  },
  {
    name: '404',
    path: '/404',
    icon: <HeartOutlined />,
  },
];

export { asideMenuConfig };

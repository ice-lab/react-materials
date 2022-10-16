import { Outlet, Link, useLocation, useAuth } from 'ice';
import ProLayout from '@ant-design/pro-layout';
import { asideMenuConfig } from '@/menuConfig';
import store from '@/store';
import { getCookie } from '@/utils/cookie';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const [auth] = useAuth();
  const [userModel] = store.useModel('user');

  if (['/login'].includes(location.pathname)) {
    return <Outlet />
  }

  return (
    <ProLayout
      title="ice.js & antd"
      location={{
        pathname: location.pathname,
      }}
      menuDataRender={() => asideMenuConfig}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
    >
      <Outlet />
    </ProLayout>
  )
}

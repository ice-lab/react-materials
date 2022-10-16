import { Outlet, Link, useLocation } from 'ice';
import ProLayout from '@ant-design/pro-layout';
import { asideMenuConfig } from '@/menuConfig';

export default function Layout() {
  const location = useLocation();

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

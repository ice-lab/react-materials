import { Outlet, Link, useLocation } from 'ice';
import ProLayout from '@ant-design/pro-layout';
import { asideMenuConfig } from '@/menuConfig';
import store from '@/store';
import logo from '@/assets/logo.png';
import styles from './layout.module.css';
import AvatarDropdown from '@/components/AvatarDropdown';

export default function Layout() {
  const location = useLocation();
  const [userState, userDispatcher] = store.useModel('user');

  if (['/login'].includes(location.pathname)) {
    return <Outlet />
  }

  return (
    <ProLayout
      className={styles.layout}
      logo={<img src={logo} alt="logo" />}
      title="ICE Pro"
      location={{
        pathname: location.pathname,
      }}
      layout='mix'
      fixSiderbar
      rightContentRender={() => (
        <AvatarDropdown avatar={userState.currentUser.avatar} name={userState.currentUser.name} />
      )}
      menuHeaderRender={undefined}
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

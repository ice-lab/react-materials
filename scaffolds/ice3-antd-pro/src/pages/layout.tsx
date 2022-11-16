import { Outlet, Link, useLocation } from 'ice';
import ProLayout from '@ant-design/pro-layout';
import { asideMenuConfig } from '@/menuConfig';
import AvatarDropdown from '@/components/AvatarDropdown';
import store from '@/store';
import logo from '@/assets/logo.png';
import styles from './layout.module.css';
import Footer from '@/components/Footer';

export default function Layout() {
  const location = useLocation();
  const [userState] = store.useModel('user');

  if (['/login'].includes(location.pathname)) {
    return <Outlet />;
  }

  return (
    <ProLayout
      menu={{ defaultOpenAll: true }}
      className={styles.layout}
      logo={<img src={logo} alt="logo" />}
      title="ICE Pro"
      location={{
        pathname: location.pathname,
      }}
      layout="mix"
      rightContentRender={() => (
        <AvatarDropdown avatar={userState.currentUser.avatar} name={userState.currentUser.name} />
      )}
      menuDataRender={() => asideMenuConfig}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      footerRender={() => <Footer />}
    >
      <Outlet />
    </ProLayout>
  );
}

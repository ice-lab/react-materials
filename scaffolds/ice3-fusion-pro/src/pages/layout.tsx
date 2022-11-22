import { Outlet, Link, useLocation } from 'ice';
import { Shell, ConfigProvider } from '@alifd/next';

import { asideMenuConfig } from '@/menuConfig';
import AvatarDropdown from '@/components/AvatarDropdown';
import store from '@/store';
import logo from '@/assets/logo.png';
import styles from './layout.module.css';
import Footer from '@/components/Footer';
import Logo from './components/Logo';

export default function Layout() {
  const location = useLocation();
  const [userState] = store.useModel('user');

  if (['/login'].includes(location.pathname)) {
    return <Outlet />;
  }

  return (
    // <ProLayout
    //   menu={{ defaultOpenAll: true }}
    //   className={styles.layout}
    //   logo={<img src={logo} alt="logo" />}
    //   title="ICE Pro"
    //   location={{
    //     pathname: location.pathname,
    //   }}
    //   layout="mix"
    //   rightContentRender={() => (
    //     <AvatarDropdown avatar={userState.currentUser.avatar} name={userState.currentUser.name} />
    //   )}
    //   menuDataRender={() => asideMenuConfig}
    //   menuItemRender={(item, defaultDom) => {
    //     if (!item.path) {
    //       return defaultDom;
    //     }
    //     return <Link to={item.path}>{defaultDom}</Link>;
    //   }}
    //   footerRender={() => <Footer />}
    // >
    //   <Outlet />
    // </ProLayout>
    <ConfigProvider device={device}>
      <Shell
        style={{
          minHeight: '100vh',
        }}
        type="brand"
        fixedHeader={false}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text="Logo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        >
          <GlobalSearch />
        </Shell.Navigation>
        <Shell.Action>
          <Notice />
          <SolutionLink />
          <HeaderAvatar />
        </Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>

  );
}

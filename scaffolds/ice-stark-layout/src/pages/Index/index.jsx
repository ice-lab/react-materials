import React, { useContext } from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import PathnameContext from '@/context/PathnameContext';

export default function BasicPage() {
  const { setPathname } = useContext(PathnameContext);

  return (
    <AppRouter
      NotFoundComponent={NotFound}
      LoadingComponent={PageLoading}
      onRouteChange={pathname => {
        setPathname(pathname);
      }}
    >
      <AppRoute
        path={['/', '/list', '/detail']}
        basename="/"
        exact
        title="主页"
        url={['//localhost:4444/js/index.js', '//localhost:4444/css/index.css']}
      />
      <AppRoute
        path="/waiter"
        basename="/waiter"
        title="用户页面"
        url={['//localhost:5555/js/index.js', '//localhost:5555/css/index.css']}
      />
      {/* <AppRoute
          path={['/', '/home', '/about']}
          basename="/"
          exact
          title="主页"
          url={[
            '//g.alicdn.com/icestark-demo/child/0.1.2/js/index.js',
            '//g.alicdn.com/icestark-demo/child/0.1.2/css/index.css',
          ]}
        />
        <AppRoute
          path="/user"
          basename="/user"
          title="用户页面"
          url={[
            '//g.alicdn.com/icestark-demo/child2/0.1.2/js/index.js',
            '//g.alicdn.com/icestark-demo/child2/0.1.2/css/index.css',
          ]}
        /> */}
    </AppRouter>
  );
}

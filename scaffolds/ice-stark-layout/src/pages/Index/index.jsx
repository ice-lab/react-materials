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
        title="商家平台"
        url={[
          '//g.alicdn.com/icestark-demo/child/0.2.1/js/index.js',
          '//g.alicdn.com/icestark-demo/child/0.2.1/css/index.css',
        ]}
      />
      <AppRoute
        path="/user"
        basename="/user"
        title="小二平台"
        url={[
          '//g.alicdn.com/icestark-demo/child2/0.2.0/js/index.js',
          '//g.alicdn.com/icestark-demo/child2/0.2.0/css/index.css',
        ]}
      />
    </AppRouter>
  );
}

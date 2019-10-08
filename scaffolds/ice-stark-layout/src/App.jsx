import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import BasicLayout from '@/layouts/BasicLayout';

export default function App() {
  return (
    <BasicLayout>
      <AppRouter
        NotFoundComponent={NotFound}
        LoadingComponent={PageLoading}
        onRouteChange={pathname => {
          console.log('route change', pathname);
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
          path="/waiter"
          basename="/waiter"
          title="小二平台"
          url={[
            '//g.alicdn.com/icestark-demo/child2/0.2.1/js/index.js',
            '//g.alicdn.com/icestark-demo/child2/0.2.1/css/index.css',
          ]}
        />
      </AppRouter>
    </BasicLayout>
  );
}

import React, { useState } from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import BasicLayout from '@/layouts/BasicLayout';

const apps = [{
  path: ['/', '/message', '/about'],
  exact: true,
  title: '通用页面',
  url: [
    '//ice.alicdn.com/icestark/child-common-react/index.js',
    '//ice.alicdn.com/icestark/child-common-react/index.css',
    // 'http://localhost:5555/js/index.js',
    // 'http://localhost:5555/css/index.css',
  ],
}, {
  path: '/seller',
  title: '商家平台',
  url: [
    '//ice.alicdn.com/icestark/child-seller-react/index.js',
    '//ice.alicdn.com/icestark/child-seller-react/index.css',
    // '//127.0.0.1:3444/js/index.js',
    // '//127.0.0.1:3444/css/index.css',
  ],
}, {
  path: '/waiter',
  title: '小二平台',
  url: [
    '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
    '//ice.alicdn.com/icestark/child-waiter-vue/app.css',
    // '//localhost:8080/app.js',
    // '//localhost:8080/css/app.css',
  ],
}];

export default function App() {
  const [pathname, setPathname] = useState();

  function handleRouteChange(newPathname) {
    console.log(
      'route change oldPathname',
      pathname,
      'newPathname',
      newPathname,
    );
    setPathname(newPathname);
  }

  function handleAppLeave(appConfig) {
    console.log('handleAppLeavel', appConfig);
  }

  function handleAppEnter(appConfig) {
    console.log('handleAppEnter', appConfig);
  }

  return (
    <BasicLayout pathname={pathname}>
      <AppRouter
        NotFoundComponent={NotFound}
        LoadingComponent={PageLoading}
        onRouteChange={handleRouteChange}
        onAppLeave={handleAppLeave}
        onAppEnter={handleAppEnter}
      >
        {
          (apps || []).map((item, idx) => {
            return (
              <AppRoute
                key={idx}
                {...item}
              />
            );
          })
        }
      </AppRouter>
    </BasicLayout>
  );
}

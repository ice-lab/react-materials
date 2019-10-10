import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import NotFound from '@/components/NotFound';
import PageLoading from '@/components/PageLoading';
import BasicLayout from '@/layouts/BasicLayout';

export default class App extends React.Component {

  state = {
    pathname: '',
  }

  handleRouteChange = (pathname) => {
    console.log('route change', pathname);
    this.setState({
      pathname,
    });
  }

  handleAppLeave = (appConfig) => {
    console.log('handleAppLeavel', appConfig);
  }

  handleAppEnter = (appConfig) => {
    console.log('handleAppEnter', appConfig);
  }

  render() {
    const { pathname } = this.state;

    return (
      <BasicLayout pathname={pathname}>
        <AppRouter
          NotFoundComponent={NotFound}
          LoadingComponent={PageLoading}
          onRouteChange={this.handleRouteChange}
          onAppLeave={this.handleAppLeave}
          onAppEnter={this.handleAppEnter}
        >
          {/* 基于 React@15.x */}
          <AppRoute
            path={['/', '/message', '/about']}
            basename="/"
            exact
            title="通用页面"
            url={[
              '//unpkg.com/icestark-child-common/build/js/index.js',
              '//unpkg.com/icestark-child-common/build/css/index.css',

              // 'http://localhost:5555/js/index.js',
              // 'http://localhost:5555/css/index.css',
            ]}
          />

          {/* 基于 React@16.x */}
          <AppRoute
            path="/seller"
            basename="/seller"
            title="商家平台"
            url={[
              '//unpkg.com/icestark-child-seller/build/js/index.js',
              '//unpkg.com/icestark-child-seller/build/css/index.css',
              // 'http://localhost:6666/js/index.js',
              // 'http://localhost:6666/css/index.css',
            ]}
          />

          {/* 基于 Vue@2.x */}
          <AppRoute
            basename="/waiter"
            path="/waiter"
            title="小二平台"
            url={[
              '//unpkg.com/icestark-child-waiter/dist/js/app.js',
              '//unpkg.com/icestark-child-waiter/dist/css/app.css',
              // 'http://localhost:8080/css/app.css',
              // 'http://localhost:8080/app.js',
            ]}
          />

        </AppRouter>
      </BasicLayout>
    );
  }
}

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
          <AppRoute
            path={['/', '/message', '/about']}
            basename="/"
            exact
            title="通用页面"
            url={[
              // '//g.alicdn.com/icestark-demo/child2/0.2.1/js/index.js',
              // '//g.alicdn.com/icestark-demo/child2/0.2.1/css/index.css',
              'http://localhost:5555/js/index.js',
              'http://localhost:5555/css/index.css',
            ]}
          />
          <AppRoute
            path="/seller"
            basename="/seller"
            title="商家平台"
            url={[
              // '//g.alicdn.com/icestark-demo/child/0.2.1/js/index.js',
              // '//g.alicdn.com/icestark-demo/child/0.2.1/css/index.css',
              'http://localhost:4445/js/index.js',
              'http://localhost:4445/css/index.css',
            ]}
          />

          <AppRoute
            basename="/waiter"
            path="/waiter"
            title="小二平台"
            url={[
              // '//g.alicdn.com/icestark-demo/child/0.2.1/js/index.js',
              // '//g.alicdn.com/icestark-demo/child/0.2.1/css/index.css',
              'http://localhost:8080/app.js',
              'http://localhost:8080/css/app.css',
            ]}
          />

        </AppRouter>
      </BasicLayout>
    );
  }
}

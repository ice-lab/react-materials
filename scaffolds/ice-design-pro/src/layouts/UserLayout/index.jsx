import React, { Component, Suspense } from 'react';
import Layout from '@icedesign/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageLoading from '../../components/PageLoading';
import Footer from './Footer';
import { routerData } from '../../routerConfig';
import './index.scss';

export default class UserLayout extends Component {
  static displayName = 'UserLayout';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className="user-layout">
        <div className="header">
          <a href="#" className="meta">
            <span className="title">LOGO</span>
          </a>
          <p className="desc">让前端开发简单而友好</p>
        </div>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            {routerData.map((item, index) => {
              return item.component ? (
                <Route
                  key={index}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ) : null;
            })}

            <Redirect exact from="/user" to="/user/login" />
          </Switch>
        </Suspense>
        <Footer />
      </Layout>
    );
  }
}

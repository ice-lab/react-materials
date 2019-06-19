import React, { Component, Suspense } from 'react';
import Layout from '@icedesign/layout';
import PageLoading from '../../components/PageLoading';
import Footer from './Footer';
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
          {this.props.children}
        </Suspense>
        <Footer />
      </Layout>
    );
  }
}

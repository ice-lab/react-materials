import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header/index';
import Aside from './components/Aside';
import Footer from './components/Footer/index';
import MainRoutes from './MainRoutes';
import './index.scss';

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout
        fixable
        style={{ minHeight: '100vh' }}
        className="ice-design-layout"
      >
        <Layout.Section>
          <Layout.Aside width={240}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            <Layout.Header>
              <Header />
            </Layout.Header>
            <div className="main-container">
              <MainRoutes />
            </div>
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}
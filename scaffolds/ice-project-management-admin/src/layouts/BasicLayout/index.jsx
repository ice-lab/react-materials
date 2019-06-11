import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';
import styles from  './index.module.scss';

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout
        fixable
        className={styles.icedesignlayout}
      >
        <Layout.Section>
          <Layout.Aside width={240}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            <Layout.Header>
              <Header />
            </Layout.Header>
            <div className={styles.maincontainer}>
              <MainRoutes />
            </div>
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

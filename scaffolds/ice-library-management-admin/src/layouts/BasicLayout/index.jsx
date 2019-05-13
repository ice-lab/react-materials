import React, { Component } from 'react';
import cx from 'classnames';
import Layout from '@icedesign/layout';
import MainRoutes from './MainRoutes';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';

import './BasicLayout.scss';
import styles from './index.module.scss'
const theme = 'dark';

export default class Index extends Component {
  render() {
    return (
      <Layout
        fixable
        className={cx(`basic-layout-${theme} ice-design-layout ${styles.minHeight}`)}
      >
        <Header theme={theme} />

        <Layout.Section>
          <Layout.Aside width={240}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            <MainRoutes />
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';

import styles from './index.module.scss';

export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className={styles.basicLayout}>
        <Header />
        <div className={styles.mainContent}>
          <MainRoutes />
        </div>
        <Footer />
      </Layout>
    );
  }
}

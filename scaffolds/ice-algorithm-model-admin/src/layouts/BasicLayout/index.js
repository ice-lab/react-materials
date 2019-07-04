import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './index.module.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout className={styles.basicLayout}>
      <Header />
      <div className={styles.mainContent}>
        {children}
      </div>
      <Footer />
    </Layout>
  );
}

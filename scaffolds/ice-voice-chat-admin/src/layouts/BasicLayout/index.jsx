import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout
      fixable
      style={{ minHeight: '100vh' }}
      className={styles.iceDesignLayout}
    >
      <Header />

      <Layout.Section>
        <Layout.Aside width={240}>
          <Aside />
        </Layout.Aside>
        <Layout.Main scrollable>
          {children}
          <Footer />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

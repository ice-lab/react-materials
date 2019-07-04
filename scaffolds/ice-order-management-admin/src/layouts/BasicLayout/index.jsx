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
      className={styles.iceDesignLayout}
    >
      <Layout.Aside width={240}>
        <Aside />
      </Layout.Aside>

      <Layout.Section>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Main scrollable>
          <div className={styles.mainContainer}>
            {children}
          </div>
          <Footer />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

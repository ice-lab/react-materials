import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout fixable className={styles.iceLayout}>
      <Layout.Section>
        <Layout.Aside>
          <Aside />
        </Layout.Aside>
        <Layout.Main scrollable>
          <Layout.Header type="secondary">
            <Header />
          </Layout.Header>
          <div className={styles.mainContainer}>
            {children}
          </div>
          <Footer />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

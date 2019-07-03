/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import styles from './index.module.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout fixable className={styles.layout}>
      <Layout.Header type="secondary">
        <Header />
      </Layout.Header>

      <Layout.Section>
        <Layout.Aside>
          <Aside />
        </Layout.Aside>

        {/* 主体内容 */}
        <Layout.Main scrollable className={styles.main}>
          {children}
          <Layout.Footer type="none">
            <Footer />
          </Layout.Footer>
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

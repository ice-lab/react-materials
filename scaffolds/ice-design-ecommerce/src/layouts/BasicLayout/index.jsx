import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer/index.jsx';
import styles from './index.module.scss';

export default function BasicLayout(props) {
  return (
    <Layout
      fixable
      style={{ minHeight: '100vh' }}
      className={styles.iceDesignLayout}
    >
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Section>
        <Layout.Aside width={100}>
          <Aside />
        </Layout.Aside>
        <Layout.Main className={styles.iceLayoutMain} scrollable>
          <div className={styles.mainContainer}>
            {props.children}
          </div>
          <Footer className={styles.iceLayoutFooter} />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

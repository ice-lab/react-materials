import Layout from '@icedesign/layout';
import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <Layout className={styles.layout}>
      {/* 顶部导航  */}
      <Header />
      <Layout.Section className={styles.layoutSecion}>
        {/* 侧边导航  */}
        <Aside />
        {/* 主体内容 */}
        <Layout.Main className={styles.layoutMain}>
          {children}
        </Layout.Main>
      </Layout.Section>
      <Footer />
    </Layout>
  );
}

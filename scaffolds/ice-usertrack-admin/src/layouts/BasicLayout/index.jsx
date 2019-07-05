import React from 'react';
import Layout from '@icedesign/layout';

import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import styles from './index.module.scss';

export default function BasicLayout({ children }) {
  return (
    <Layout fixable className="layout">
      {/* 顶部导航  */}
      <Header />

      <Layout.Section className={styles.secion}>
        {/* 侧边导航  */}
        <Aside />

        {/* 主体内容 */}
        <Layout.Main scrollable className={styles.main}>
          {children}

          {/* 底部页脚 */}
          <Footer />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

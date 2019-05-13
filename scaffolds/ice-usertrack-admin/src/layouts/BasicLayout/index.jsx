/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import MainRoutes from './MainRoutes';
import styles from './index.module.scss';
@withRouter
export default class BasicLayout extends Component {
  render() {
    return (
      <Layout fixable className='layout'>
        {/* 顶部导航  */}
        <Header />

        <Layout.Section className={styles.secion}>
          {/* 侧边导航  */}
          <Aside />

          {/* 主体内容 */}
          <Layout.Main scrollable className={styles.main}>
            <MainRoutes />

            {/* 底部页脚 */}
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

// const styles = {
//   secion: {
//     flexDirection: 'row',
//   },
//   main: {
//     padding: '0',
//     background: '#f2f2f2',
//   },
// };

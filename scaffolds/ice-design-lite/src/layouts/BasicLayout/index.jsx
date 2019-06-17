/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { useState, useEffect } from 'react';
import Layout from '@icedesign/layout';
import { withRouter } from 'react-router';
import { enquire } from 'enquire-js';

import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';
import './index.scss';

const BasicLayout = withRouter(() => {

  const [isScreen, setIsScreen] = useState();

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      },
    };

    return handler;
  }

  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  function enquireScreenRegister() {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, enquireScreenHandle('isMobile'));
    enquire.register(isTablet, enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, enquireScreenHandle('isDesktop'));
  }

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const isMobile = isScreen !== 'isDesktop';
  const layoutClassName = `ice-design-layout-dark ice-design-layout`;

  return (
    <div className={layoutClassName}>
      <Layout >
        <Header isMobile={isMobile} />
        <Layout.Section scrollable>
          <Layout.Aside width="auto" type={null}>
            <Aside isMobile={isMobile} />
          </Layout.Aside>
          <Layout.Main>
            <MainRoutes />
          </Layout.Main>
        </Layout.Section>
        <Footer />
      </Layout>
    </div>
  );
});

export default BasicLayout;

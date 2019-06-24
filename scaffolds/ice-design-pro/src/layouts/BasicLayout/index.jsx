import React, { useState, useEffect } from 'react';
import Layout from '@icedesign/layout';
import { enquire } from 'enquire-js';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function BasicLayout(props) {
  const [isScreen, setIsScreen] = useState('isDesktop');

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

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      },
    };

    return handler;
  }

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const isMobile = isScreen !== 'isDesktop';

  return (
    <div className={styles.iceDesignLayoutDark}>
      <Layout>
        <Header
          isMobile={isMobile}
        />
        <Layout.Section>
          <Layout.Aside width="auto" type={null}>
            <Aside isMobile={isMobile} />
          </Layout.Aside>
          <Layout.Main>
            {props.children}
          </Layout.Main>
        </Layout.Section>

        <Footer />
      </Layout>
    </div>
  );
}

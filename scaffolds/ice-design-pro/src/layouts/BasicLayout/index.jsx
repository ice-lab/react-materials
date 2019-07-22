import React, { useState, useEffect } from 'react';
import { enquire } from 'enquire-js';
// import Shell from '@alifd/shell';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
// import Logo from './components/Logo';

export default function BasicLayout(props) {
  const [isScreen, setIsScreen] = useState('isDesktop');
  // const [collapse, setCollapse] = useState(false);
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
  // let device;
  // if (isScreen === 'isDesktop') {
  //   device ='desktop';
  // } else if (isScreen === 'isTablet') {
  //   device = 'pad';
  // } else {
  //   device = 'phone';
  // }

  // const triggerProps = {
  //   onClick(e, crtCollapse) {
  //     setCollapse(!crtCollapse)
  //   },
  // };

  // const handleCollapse = c => {
  //   setCollapse(c)
  // };

  return (
    <Layout>
      <Layout.Header>
        <Header isMobile={isMobile} />
      </Layout.Header>

      <Layout.Section scrollable>
        <Layout.Aside>
          <Aside isMobile={isMobile} />
        </Layout.Aside>
        <Layout.Main>
          <div style={{ minHeight: '90vh' }}>
            { props.children }
          </div>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout.Main>
      </Layout.Section>
    </Layout>

    // <Shell device={device}>
    //   <Shell.Branding>
    //     <Logo />
    //   </Shell.Branding>

    //   <Shell.Action >
    //     <Header isMobile={isMobile} />
    //   </Shell.Action>

    //   <Shell.Navigation triggerProps={triggerProps}>
    //     <Aside isMobile={isMobile} collapse={collapse} handleCollapse={handleCollapse} />
    //   </Shell.Navigation>

    //   <Shell.Content style={{ minHeight: '90vh' }}>
    //     { props.children }
    //   </Shell.Content>

    //   <Shell.Footer style={{backgroundColor: 'transparent'}}>
    //     <Footer />
    //   </Shell.Footer>
    // </Shell>
  )
}

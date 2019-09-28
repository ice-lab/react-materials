import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';

export default function BasicLayout(props) {
  return (
    <Layout
      fixable
      style={{ minHeight: '100vh' }}
      className="ice-design-layout"
    >
      <Header />

      <Layout.Section>
        <Layout.Aside width={120}>
          <Aside />
        </Layout.Aside>

        <Layout.Main scrollable>
          { props.children }
          <Footer />
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

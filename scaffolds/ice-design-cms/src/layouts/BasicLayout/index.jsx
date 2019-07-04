import React from 'react';
import Layout from '@icedesign/layout';
import { withRouter } from 'react-router';

import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

const BasicLayout = props => (
  <div className={styles.iceDesignLayout}>
    <Layout>
      <Header />
      <Layout.Section scrollable>
        <Layout.Aside>
          <Aside />
        </Layout.Aside>
        <Layout.Main>
          { props.children }
        </Layout.Main>
      </Layout.Section>

      <Footer />
    </Layout>
  </div>
);

export default withRouter(BasicLayout);

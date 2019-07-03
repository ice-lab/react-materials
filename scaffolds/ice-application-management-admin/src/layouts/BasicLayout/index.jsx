import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Asdie from './components/Aside';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className={styles.iceLayout}>
        <Header />
        <Layout.Section className={styles.iceLayoutSection}>
          <Layout.Aside>
            <Asdie />
          </Layout.Aside>

          <Layout.Main className={styles.iceLayoutMain} scrollable>
            {this.props.children}
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

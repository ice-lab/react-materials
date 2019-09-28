import React from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import styles from './index.module.scss';

export default function BaseLayout(props) {
  return (
    <Layout className={styles.container}>
      <Header />
      <Layout.Section>
        <Layout.Main className={styles.main}>
          {props.children}
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}

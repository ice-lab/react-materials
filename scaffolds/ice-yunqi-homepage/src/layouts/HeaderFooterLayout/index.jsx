import React from 'react';
import Layout from '@icedesign/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.module.scss';

export default function HeaderFooterLayout(props) {
  return (
    <Layout className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </Layout>
  );
}

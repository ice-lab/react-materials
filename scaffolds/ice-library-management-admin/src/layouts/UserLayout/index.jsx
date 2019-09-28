import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './Footer';
import styles from './index.module.scss';

export default function Index(props) {
  const { children } = props;
  return (
    <Layout className={styles.userLayout}>
      <div className={styles.layerMask} />
      <div className={styles.userContent}>
        {children}
      </div>

      <Footer />
    </Layout>
  );
}

import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './Footer';
import styles from './index.module.scss';

export default function UserLayout({ children }) {
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

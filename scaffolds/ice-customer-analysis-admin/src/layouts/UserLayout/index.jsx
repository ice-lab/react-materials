import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './Footer';
import styles from  './index.module.scss';

export default function Index(props) {
  return (
    <Layout className={styles.userLayout}>
      <div className={styles.layerMask} />
      <div className={styles.userContent}>
        {props.children}
      </div>

      <Footer />
    </Layout>
  );
}

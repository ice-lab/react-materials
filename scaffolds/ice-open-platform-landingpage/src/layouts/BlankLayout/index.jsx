import React from 'react';
import Layout from '@icedesign/layout';
import styles from './index.module.scss';

export default function BlankLayout({ children }) {
  return (
    <Layout className={styles.iceBlankLayoutMinHeight}>
      {children}
    </Layout>
  );
}

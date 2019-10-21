import React from 'react';
import Layout from '@icedesign/layout';
import Footer from './components/Footer';
import styles from './index.module.scss';

export default function UserLayout(props) {
  return (
    <Layout className={styles.userLayout}>
      <div className={styles.header}>
        <a href="#" className={styles.meta}>
          <span className={styles.title}>LOGO</span>
        </a>
        <p className={styles.desc}>让前端开发简单而友好</p>
      </div>
      {props.children}
      <Footer />
    </Layout>
  );
}

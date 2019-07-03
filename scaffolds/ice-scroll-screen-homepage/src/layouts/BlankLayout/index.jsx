import React from 'react';
import Layout from '@icedesign/layout';
import Footer from '../../components/Footer';
import styles from './index.module.scss';

export default props => (
  <Layout className={styles.container}>
    { props.children }
    <Footer />
  </Layout>
);

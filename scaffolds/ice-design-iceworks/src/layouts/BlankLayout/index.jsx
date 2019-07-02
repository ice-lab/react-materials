import React from 'react';
import Layout from '@icedesign/layout';
import styles from './index.module.scss';

export default (props) => {
  return (
    <Layout className={styles.iceblanklayout}>
      {props.children}
    </Layout>
  );
};

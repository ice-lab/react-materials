import React from 'react';
import Layout from '@icedesign/layout';

import styles from './index.module.scss';

export default function Footer() {
  return (
    <Layout.Footer className={styles.iceDesignLayoutFooter}>
      <div className={styles.iceDesignLayoutFooterBody}>
        <div className={styles.logo} />
        <div className={styles.copyright}>
          © 2018 Theme designed by
          {' '}
          <a
            href="https://github.com/alibaba/ice"
            target="_blank"
            className={styles.copyrightLink}
            rel="noopener noreferrer"
          >
            ICE
          </a>
        </div>
      </div>
    </Layout.Footer>
  );
}

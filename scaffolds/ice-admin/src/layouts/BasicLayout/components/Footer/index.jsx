import React from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Footer(props) {
  const { className, style } = props;
  return (
    <Layout.Footer
      className={cx(styles.iceDesignLayoutFooter, className)}
      type={null}
      style={style}
    >
      <div className={styles.iceDesignLayoutFooterBody}>
        <div className={styles.designLayout}>
          <Logo isDark />
        </div>
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

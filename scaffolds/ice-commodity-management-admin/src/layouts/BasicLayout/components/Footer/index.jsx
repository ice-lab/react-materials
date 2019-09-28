import React from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';
import styles from './index.module.scss';

export default function Footer({ className, style }) {
  return (
    <Layout.Footer
      type={null}
      className={cx(styles.iceLayoutFooter, className)}
      style={{
        ...style,
        lineHeight: '36px',
      }}
    >
      <div className={styles.iceLayoutFooterBody}>
        <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
          <Logo isDark />
        </div>
        <div className={styles.copyright}>
          © 2018 Theme designed by{' '}
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

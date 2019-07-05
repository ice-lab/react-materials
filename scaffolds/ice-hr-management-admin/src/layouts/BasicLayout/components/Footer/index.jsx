import React from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';
import styles from './index.module.scss';

export default function Footer(props) {
  const { className, style } = props;
  return (
    <Layout.Footer
      className={cx(styles.iceLayoutFooter, className)}
      style={{
        ...style,
        lineHeight: '36px',
      }}
    >
      <div className={styles.iceDesignLayoutFooterBody}>
        <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
          <Logo className={{ color: '#666' }} />
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

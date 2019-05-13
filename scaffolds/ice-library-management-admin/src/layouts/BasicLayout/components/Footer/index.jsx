import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';

import './Footer.scss';
import styles from './index.module.scss';

export default class Index extends PureComponent {
  render() {
    const { className, style } = this.props;
    return (
      <Layout.Footer
        className={cx('ice-design-layout-footer', className, styles.backgroundColor)}
        style={{
          ...style,
        }}
      >
        <div className="ice-design-layout-footer-body">
          <div className={styles.filter}>
            <Logo style={styles.color}/>
          </div>
          <div className="copyright">
            © 2018 Theme designed by{' '}
            <a
              href="https://github.com/alibaba/ice"
              target="_blank"
              className="copyright-link"
              rel="noopener noreferrer"
            >
              ICE
            </a>
          </div>
        </div>
      </Layout.Footer>
    );
  }
}

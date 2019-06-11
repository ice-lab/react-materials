import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import Logo from '../Logo';

import styles from  './index.module.scss';

export default class Footer extends PureComponent {
  render() {
    const { className, style } = this.props;
    return (
      <Layout.Footer
        type={null}
        className={cx('ice-design-layout-footer', className)}
        style={{
          ...style,
        }}
      >
        <div className={styles.icedesignlayoutfooterbody}>
          <div className={styles.logodiv}>
            <Logo style={{color :"#333"}}/>
          </div>
          <div className={style.copyright}>
            © 2018 Theme designed by{' '}
            <a
              href="https://github.com/alibaba/ice"
              target="_blank"
              className={style.copyrightlink}
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

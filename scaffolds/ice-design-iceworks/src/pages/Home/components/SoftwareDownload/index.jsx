import React from 'react';
import { Button, Message } from '@alifd/next';
import styles from './index.module.scss';

export default function SoftwareDownload() {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.bgImage2} />
      <div className={styles.wrapper}>
        <div className={styles.bgImage}>
          <div className={styles.bgImageMask} />
        </div>
        <div className={styles.wrapperBody}>
          <div className={styles.softwareIntro}>
            <div className={styles.title}>Iceworks</div>
            <div className={styles.slogan}>让前端工程变的轻松便捷</div>
            <div className={styles.btndiv}>
              <Button
                onClick={() => {
                  Message.success('开始下载');
                }}
                size="large"
                className={styles.iceworksdownloadbtn}
              >
                立即下载
              </Button>
            </div>
            <div className={styles.softwareDetail}>
              <div className={styles.version}>
                <span className={styles.spanone}>2.16.0</span>
                <span className={styles.spantwo}>当前版本</span>
              </div>
              <div className={styles.separator} />
              <div className={styles.history}>
                <span className={styles.spanone}>2018-04-23</span>
                <span className={styles.spantwo}>发布日期</span>
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.downd}>运行环境：64位，Win 7 及以上</div>
            </div>
            <div className={styles.down}>
              <a className={styles.downa} href="#">
                立即开始
              </a>
            </div>
          </div>
          <div className={styles.software} />
        </div>
      </div>
    </div>
  );
}

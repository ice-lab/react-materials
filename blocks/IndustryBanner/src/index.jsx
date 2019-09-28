import React from 'react';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.industryBannerContainer}>
      <img
        src={require('./images/TB1_fTFs1OSBuNjy0FdXXbDnVXa-1894-198.png')}
        className={styles.industryBannerImg}
        alt=""
      />
      <div className={styles.industryNotice}>
        <h3 className={styles.industryTitle}>行业公共</h3>
        <ul className={styles.industryNoticeList}>
          <li className={styles.hotNews}>
            <a className={styles.hotNewsLink} href="#">
              天猫汽车 5.5 日正常启动
            </a>
            <span className={styles.hotTag}>HOT</span>
          </li>
          <li className={styles.hotNews}>
            <a className={styles.hotNewsLink} href="#">
              有好货招稿平台即将下线
            </a>
          </li>
          <li className={styles.hotNews}>
            <a className={styles.hotNewsLink} href="#">
              天猫汽车5.5日正式启动
            </a>
          </li>
          <li className={styles.hotNews}>
            <a className={styles.hotNewsLink} href="#">
              有好货招稿平台即将下线
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

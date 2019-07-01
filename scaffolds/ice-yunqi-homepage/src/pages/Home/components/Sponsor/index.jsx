import React from 'react';
import styles from './index.module.scss';

export default function Sponsor() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainTitle}>SPONSOR</div>
        <div className={styles.mainDesc}>赞助商</div>
        <ul className={styles.items}>
          <li className={styles.item}>
            <p className={styles.subtit}>战略合作伙伴</p>
            <div className={styles.logoItems}>
              <div className={styles.logoItem}>
                <img
                  src="https://img.alicdn.com/tfs/TB1GPlpcf1TBuNjy0FjXXajyXXa-266-172.png"
                  alt=""
                  className={styles.logoImg}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

Sponsor.displayName = 'Sponsor';

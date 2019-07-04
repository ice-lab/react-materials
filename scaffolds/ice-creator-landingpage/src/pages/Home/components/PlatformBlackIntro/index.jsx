import React from 'react';
import styles from './index.module.scss';

export default () => (
  <div
    className={styles.wrapper}
    style={{
      backgroundImage: `url(${require('./images/TB1.IQmRVXXXXbYXVXXXXXXXXXX-2760-1480.png')})`,
    }}
  >
    <div className={styles.body}>
      <h2 className={styles.title}>多元化的商业机制</h2>
      <p className={styles.text}>
        商品推广佣金，精准转化内容影响力<br />优质内容奖励
        ，为优质内容创作者保驾护航<br />阿里V任务，为你的内容创作能力对接更多潜在客户
      </p>
    </div>
    <div className={styles.extraBody}>
      <img
        alt=""
        src={require('./images/TB1opWDSpXXXXbwXFXXXXXXXXXX-1412-436.png')}
        height="218"
        width="706"
        className={styles.image}
      />
      <div className={styles.extraText}>
        <p className={styles.extraTextItemLeft}>开放更多内容消费场景</p>
        <p className={styles.extraTextItemCenter}>激励优质内容生产</p>
        <p className={styles.extraTextItemRight}>连接品牌商家需求</p>
      </div>
    </div>
  </div>
);

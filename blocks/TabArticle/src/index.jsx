import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import ArticleList from './ArticleList';
import styles from  './index.module.scss';

const dataSource = [
  {
    title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
    description:
      '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。 ',
    tags: ['直播', '大促', '简介'],
    datetime: '2017年12月12日 18:00',
    star: 130,
    like: 233,
    comment: 123,
  },
  {
    title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
    description:
      '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。 ',
    tags: ['直播', '大促', '简介'],
    datetime: '2017年12月12日 18:00',
    star: 130,
    like: 233,
    comment: 123,
  },
  {
    title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
    description:
      '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。 ',
    tags: ['直播', '大促', '简介'],
    datetime: '2017年12月12日 18:00',
    star: 130,
    like: 233,
    comment: 123,
  },
  {
    title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
    description:
      '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。 ',
    tags: ['直播', '大促', '简介'],
    datetime: '2017年12月12日 18:00',
    star: 130,
    like: 233,
    comment: 123,
  },
  {
    title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
    description:
      '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。 ',
    tags: ['直播', '大促', '简介'],
    datetime: '2017年12月12日 18:00',
    star: 130,
    like: 233,
    comment: 123,
  },
];

const ICON = {
  active: require('./images/TB1bQQ4ihrI8KJjy0FpXXb5hVXa-20-24.png'),
  inactive: require('./images/TB1PwspilfH8KJjy1XbXXbLdXXa-20-24.png'),
};

export default function TabArticle() {
  const [isMobile, setMobile] = useState(false);
  
  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  return (
    <div className="tab-article">
      <IceContainer className={styles.tabList}>
        <div className={styles.tab}>
          最新 <img src={ICON.active} className={styles.icon} alt="最新" />
        </div>
        <div className={styles.tab}>
          最热 <img src={ICON.inactive} className={styles.icon} alt="最热" />
        </div>
        <div className={styles.tab}>
          距离截稿日期最近{' '}
          <img
            src={ICON.inactive}
            className={styles.icon}
            alt="距离截稿日期最近"
          />
        </div>
      </IceContainer>
      <ArticleList isMobile={isMobile} dataSource={dataSource} />
    </div>
  );
}

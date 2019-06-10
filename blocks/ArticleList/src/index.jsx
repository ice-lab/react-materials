import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';
const generatorData = () => {
  return Array.from({ length: 5 }).map(() => {
    return {
      title: '越夏越嗨皮-7月官方营销活动-技能提升方向',
      description:
        '商家通过V任务选择主播并达成合作，费用按照商品链接计算，一个商品为一个价格，建议主播在一场直播里最多接60个商品，并提供不少于两个小时的直播服务，每个商品讲解时间不少于5分钟。',
      tags: ['直播', '大促活动', '讲解'],
      like: 123,
      favor: 245,
      comment: 546,
    };
  });
};

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dataSource = generatorData();
    return (
      <div className="article-list">
        <IceContainer className={styles.articleFilterCard}>
          <ul className={`${"article-sort"} ${styles.articleSort}`}>
            <li className={styles.sortItem}>
              最新 <Icon type="arrow-down" size="xs" />
            </li>
            <li className={styles.sortItem}>
              最热 <Icon type="arrow-down" size="xs" />
            </li>
            <li className={styles.sortItem}>
              距离截稿日期最近 <Icon type="arrow-down" size="xs" />
            </li>
            <li className={styles.sortItem}>
              距离开始开启最近 <Icon type="arrow-down" size="xs" />
            </li>
          </ul>
        </IceContainer>
        <IceContainer>
          {dataSource.map((item, index) => {
            return (
              <div key={index} className={styles.articleItem}>
                <div>
                  <a className={styles.title} href="/">
                    {item.title}
                  </a>
                </div>
                <div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <div className={styles.articleItemFooter}>
                  <div className={styles.articleItemTags}>
                    {item.tags.map((tag, idx) => {
                      return (
                        <span
                          key={idx}
                          className={ `${"article-item-tag"} ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className={styles.articleItemMeta}>
                    <span className={styles.itemMetaIcon}>
                      <Icon type="good" size="small" /> {item.like}
                    </span>
                    <span className={styles.itemMetaIcon}>
                      <Icon type="favorite" size="small" /> {item.favor}
                    </span>
                    <span className={styles.itemMetaIcon}>
                      <Icon type="comments" size="small" /> {item.comment}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </IceContainer>
      </div>
    );
  }
}

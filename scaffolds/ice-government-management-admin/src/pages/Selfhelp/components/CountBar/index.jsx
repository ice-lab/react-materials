import React, { Component } from 'react';
import addIcon from './images/add.svg';
import pcIcon from './images/pc.svg';
import targetIcon from './images/target.svg';
import uploadIcon from './images/uploading.svg';
import styles from './index.module.scss';

const mockData = [
  {
    icon: targetIcon,
    title: '预检后收案登记',
    count: 12,
    instrument: '对材料预检登记案件进行收案登记',
  },
  {
    icon: addIcon,
    title: '已收案待当事人补全信息',
    count: 3,
    instrument: '对当事人正在登记案件进行查询',
  },
  {
    icon: uploadIcon,
    title: '当事人已提交待确认',
    count: 1,
    instrument: '对当事人完成的执行案件进行登记',
  },
  {
    icon: pcIcon,
    title: '已确认代办理',
    count: 12,
    instrument: '对已确认通过案件进行立案确认',
  },
];

export default class CountBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        {mockData.map((item, index) => {
          return (
            <div className={styles.counter} key={index}>
              <div className={styles.card}>
                <div className={styles.cardLeft}>
                  <img src={item.icon} className={styles.icon} alt="" />
                </div>
                <div className={styles.cardRight}>
                  <h3 className={styles.countTitle}>{item.title}</h3>
                  <span>{item.count}</span>
                </div>
              </div>
              <p className={styles.instrument}>说明: {item.instrument}</p>
            </div>
          );
        })}
      </div>
    );
  }
}



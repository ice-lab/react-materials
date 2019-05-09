import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination } from '@alifd/next';
import styles from './index.module.scss';

const dataSource = [
  {
    title: '关于淘宝网存储设备商品发布规范的公告',
    tag: 'up',
    href: '',
    time: '2017-11-29',
  },
  {
    title: '加强淘宝网电动四轮车类目准入的公告',
    tag: 'new',
    href: '',
    time: '2017-10-29',
  },
  {
    title: '淘宝网VR头盔商品发布规范的公告',
    tag: 'hot',
    href: '',
    time: '2017-03-11',
  },
  {
    title: '加强淘宝网农药类目准入的公告',
    tag: '',
    href: '',
    time: '2017-02-16',
  },
  {
    title: '淘宝网2017年春节发货时间及交易超时调整公告',
    tag: '',
    href: '',
    time: '2017-11-23',
  },
];

const dict = {
  up: '置顶',
  hot: '新',
  new: '热',
};

export default class SystemNoticeList extends Component {
  static displayName = 'SystemNoticeList';

  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    };
  }

  handleChange = (current) => {
    console.log('current:', current);
    this.setState({ current });
  };

  render() {
    return (
      <div className="system-notice-list">
        <IceContainer>
          <div className="notice-list-content">
            <h2 className={styles.title}>系统公告</h2>
            <ul className={styles.noticeList}>
              {dataSource.map((item, index) => {
                return (
                  <li key={index} className={styles.noticeIte}>
                    <a href={item.href} className={styles.noticeTitle}>
                      {item.title}
                    </a>
                    {item.tag && (
                      <span
                      className={`${styles.noticeTag} ${styles[item.tag]}`}
                      >
                        {dict[item.tag]}
                      </span>
                    )}
                    <span className={styles.noticeTime}>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.paginationWrap}>
            <Pagination
              shape="arrow-only"
              current={this.state.current}
              onChange={this.handleChange}
            />
          </div>
        </IceContainer>
      </div>
    );
  }
}


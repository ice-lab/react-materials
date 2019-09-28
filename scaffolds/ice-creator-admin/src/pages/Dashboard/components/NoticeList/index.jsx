import Container from '@icedesign/container';
import React, { useState } from 'react';
import fecha from 'fecha';
import { Pagination } from '@alifd/next';
import styles from './index.module.scss';

const mokeDataTitle = [
  '【内容分类】获得更多曝光量！',
  '【活动入口已开启】2018造物节-达人图文内容招稿说明',
  '【微淘达人训练营第3期】L1&L2等级达人看过来，福利继续喽！',
  '【爆文创作挑战开启】6月爆文红榜美妆篇 ，五步掌握爆款技巧',
];

export default function Index() {
  const data = Array.from({ length: 10 }).map(() => {
    return {
      title: mokeDataTitle[Math.floor(Math.random() * 4)],
      url: '#',
      top: Math.random() > 0.5,
      hot: Math.random() > 0.5,
      new: Math.random() > 0.5,
      time: Date.now() - Math.floor(10000000000 * Math.random()),
    };
  });

  const [dataSource, setDataSource] = useState(data);

  const handleChange = () => {
    const newData = Array.from({ length: 10 }).map(() => {
      return {
        title: mokeDataTitle[Math.floor(Math.random() * 4)],
        url: '#',
        top: Math.random() > 0.5,
        hot: Math.random() > 0.5,
        new: Math.random() > 0.5,
        time: Date.now() - Math.floor(10000000000 * Math.random()),
      };
    });
    setDataSource([...newData]);
  };

  return (
    <Container>
      <h3 className={styles.header}>平台公告</h3>
      <div>
        {dataSource.map((notice, index) => {
          return (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              title={notice.title}
              href={notice.url}
              className={styles.noticeItem}
            >
              <div>
                <span className={styles.title}>{notice.title}</span>
                {notice.top && (
                  <span className={`${styles.tag} ${styles.top}`}>置顶</span>
                )}
                {notice.hot && (
                  <span className={`${styles.tag} ${styles.hot}`}>HOT</span>
                )}
                {notice.new && (
                  <span className={`${styles.tag} ${styles.new}`}>NEW</span>
                )}
              </div>
              <span className={styles.time}>
                {fecha.format(notice.time, 'MM-DD HH:mm')}
              </span>
            </a>
          );
        })}
        <div className={styles.divPadding}>
          <Pagination onChange={handleChange} />
        </div>
      </div>
    </Container>
  );
}

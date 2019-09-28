import React from 'react';
import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 3 }).map((item, index) => {
    return {
      index: `0${index + 1}`,
      title: '云存储特惠',
      desc: '上云仅 <b>33元/年</b> ，降低企业成本',
      link: '#',
    };
  });
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainTitle}>ABOUT</div>
        <div className={styles.mainDesc}>关于阿里云</div>
        <div className={styles.tab}>
          <div
            className={styles.first}
          >
            企业级
          </div>
          <div className={styles.tabName}>个人级</div>
        </div>
        <div className={styles.items}>
          <div className={styles.tabWrap}>
            {getData().map((item) => {
              return (
                <div className={styles.tabList} key={item.index}>
                  <div className={styles.left}>
                    <div className={styles.num}>{item.index}</div>
                    <div className={styles.title}>{item.title}</div>
                  </div>
                  <div className={styles.middle}>
                    <div
                      className={styles.desc}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                  <div className={styles.btnBox}>
                    <a href={item.link} className={styles.btnLink}>
                      查看详情
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

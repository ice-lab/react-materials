import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const list = [
  {
    title: '帖子',
    img: '//gw.alicdn.com/tfscom/TB1OyT.RVXXXXcpXXXXXXXXXXXX.png',
    url: '//www.taobao.com',
  },
  {
    title: '宝贝清单',
    img: '//img.alicdn.com/tfs/TB1g6cGRFXXXXa9XXXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
  {
    title: '图片',
    img: '//img.alicdn.com/tfs/TB1hJ7dRFXXXXcgXFXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
  {
    title: '上新',
    img: '//img.alicdn.com/tfs/TB196v1RFXXXXb6aXXXXXXXXXXX-140-140.png',
    url: '//www.taobao.com',
  },
  {
    title: '短视频',
    img: '//gw.alicdn.com/tfscom/TB1toY.RVXXXXcuXXXXXXXXXXXX.png',
    url: '//www.taobao.com',
  },
  {
    title: '短视频',
    img: '//gw.alicdn.com/tfscom/TB1toY.RVXXXXcuXXXXXXXXXXXX.png',
    url: '//www.taobao.com',
  },
];

export default function EntryCard() {
  return (
    <IceContainer
      className={styles.nl}
    >
      {list.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <a href={item.url} className={styles.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} className={styles.cover} alt={item.title} />
              <div className={styles.title}>{item.title}</div>
            </a>
          </div>
        );
      })}
    </IceContainer>
  );
}

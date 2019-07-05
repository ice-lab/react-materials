import React from 'react';
import IceContainer from '@icedesign/container';
import timeIcon from './images/time.svg';

import styles from './index.module.scss';

const mock = [
  {
    title: '设计部门',
    count: 1,
    backgroundColor: '#5e83fb',
  },
  {
    title: '前端部门',
    count: 3,
    backgroundColor: '#f7da47',
  },
  {
    title: '运营部门',
    count: 6,
    backgroundColor: '#58ca9a',
  },
  {
    title: '客户端部门',
    count: 2,
    backgroundColor: '#ee706d',
  },
  {
    title: 'IOT 部门',
    count: 6,
    backgroundColor: '#447eff',
  },
];

export default function Warning() {
  return (
    <IceContainer className={styles.container}>
      <div className={styles.content}>
        {mock.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div
                style={{
                  background: `${item.backgroundColor}`,
                }}
                className={styles.image}
              >
                <img
                  alt=""
                  src={timeIcon}
                  style={{
                    transform: `rotate(${index * 72}deg)`,
                  }}
                  className={styles.iconImage}
                />
                <div className={styles.count}>{item.count}</div>
              </div>
              <p className={styles.itemTitle}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </IceContainer>
  );
}

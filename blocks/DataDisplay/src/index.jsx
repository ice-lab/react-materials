import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const data = [
  {
    count: 100,
    title: '日活跃数',
  },
  {
    count: '3,000',
    title: '月活跃数',
  },
  {
    count: '20,000',
    title: '年活跃数',
  },
];

export default function DataDisplay() {
  return (
    <div className="data-display">
      <IceContainer>
        <div className={styles.items}>
          {data.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <h5 className={styles.count}>{item.count}</h5>
                <span className={styles.splitLine} />
                <p className={styles.title}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </IceContainer>
    </div>
  );
}

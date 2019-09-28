import React from 'react';
import IceContainer from '@icedesign/container';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';

// MOCK 数据
const EVENT_LIST = [
  {
    time: '2018',
    title: '会议',
    description: 'React Conf 2018',
    address: 'Henderson, Nevad',
  },
  {
    time: '2018',
    title: '会议',
    description: 'React Conf 2018',
    address: 'Henderson, Nevad',
  },
  {
    time: '2018',
    title: '会议',
    description: 'React Conf 2018',
    address: 'Henderson, Nevad',
  },
  {
    time: '2018',
    title: '会议',
    description: 'React Conf 2018',
    address: 'Henderson, Nevad',
  },
];

export default function EventList() {
  return (
    <IceContainer>
      {EVENT_LIST.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.time}>{item.time}</div>
            <div className={styles.body}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.address}>
                <Icon type="map" size="xs" className={styles.icon} />
                {item.address}
              </p>
            </div>
          </div>
        );
      })}
    </IceContainer>
  );
}

import React from 'react';
import IceContainer from '@icedesign/container';
import { Pagination } from '@alifd/next';
import styles from './index.module.scss';

const dataSource = [
  {
    title: '消息标题',
    message: '这里是消息的一些详细说明。',
    datetime: '07-07 18:36',
  },
  {
    title: '消息标题',
    message: '这里是消息的一些详细说明。',
    datetime: '07-07 18:36',
  },
  {
    title: '消息标题',
    message: '这里是消息的一些详细说明。',
    datetime: '07-07 18:36',
  },
  {
    title: '消息标题',
    message: '这里是消息的一些详细说明。',
    datetime: '07-07 18:36',
  },
  {
    title: '消息标题',
    message: '这里是消息的一些详细说明。',
    datetime: '07-07 18:36',
  },
];

export default function MessageList() {
  const renderItem = (item, idx) => {
    return (
      <div className={styles.item} key={idx}>
        <div className={styles.title}>
          {item.title}
          <span className={styles.datetime}>{item.datetime}</span>
        </div>
        <div className={styles.message}>{item.message}</div>
      </div>
    );
  };

  return (
    <div className={styles.messageList}>
      <IceContainer>
        {dataSource.map(renderItem)}
        <div className={styles.paginationWarp}>
          <Pagination />
        </div>
      </IceContainer>
    </div>
  );
}

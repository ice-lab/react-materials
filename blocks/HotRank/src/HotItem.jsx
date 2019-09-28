import { Progress } from '@alifd/next';
import React from 'react';

import styles from './index.module.scss';

const rankStyle = [
  { backgroundColor: '#f74444' },
  { backgroundColor: '#ff7272' },
  { backgroundColor: '#f9a4a4' },
];

export default function HotItem({ data }) {
  return (
    <a href={data.url} className={styles.item}>
      <span
        style={{
          ...rankStyle[Number(data.index) - 1],
        }}
        className={styles.index}
      >
        {data.index}
      </span>
      <span className={styles.keyword}>{data.keyword}</span>
      <Progress shape="progressive" style={{ width: 60 }} percent={data.percent} />
      <span className={styles.total}>{data.total}</span>
      <span className={styles.link}>解读</span>
    </a>
  );
}

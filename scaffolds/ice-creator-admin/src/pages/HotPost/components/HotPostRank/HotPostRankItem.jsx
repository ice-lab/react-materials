import React from 'react';
import styles from './index.module.scss';

const rankStyle = [
  { backgroundColor: '#ee706d' },
  { backgroundColor: '#f7da47' },
  { backgroundColor: '#58ca9a' },
];

export default function HotPostRankItem(props) {
  const { data } = props;
  return (
    <a className={styles.hotRankItem} href={data.url}>
      <span
        className={styles.index}
        style={rankStyle[Number(data.index) - 1]}
      >
        {data.index}
      </span>
      <span className={styles.keyword}>{data.keyword}</span>
      <span className={styles.total}>{data.total}</span>
      <span className={styles.link}>解读</span>
    </a>
  );
}

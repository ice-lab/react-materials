import React, { Component } from 'react';

import styles from './index.module.scss';

const rankStyle = [
  { backgroundColor: '#f74444' },
  { backgroundColor: '#ff7272' },
  { backgroundColor: '#f9a4a4' },
];

class HotPostRankItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <a className="hot-rank-item" href={data.url} className={styles.item}>
        <span
          style={{
            ...rankStyle[Number(data.index) - 1],
          }}
          className={styles.index}
        >
          {data.index}
        </span>
        <span className={styles.keyword}>{data.keyword}</span>
        <span className={styles.total}>{data.total}</span>
        <span className={styles.link}>解读</span>
      </a>
    );
  }
}
export default HotPostRankItem;

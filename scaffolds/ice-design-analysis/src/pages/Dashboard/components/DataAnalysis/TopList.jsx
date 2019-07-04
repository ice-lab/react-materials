import React from 'react';
import TextLoop from 'react-text-loop';
import Title from './Title';
import styles from './index.module.scss';

export default function TopList({ data, title }) {
  return (
    <div style={{ height: '33%' }}>
      <Title data={title} />
      <ul className={styles.list}>
        {data.map((item, index) => {
          return (
            <TextLoop key={index}>
              <li className={styles.item}>
                <span className={styles.idx}>No.{index + 1}</span>
                <span className={styles.name}>{item.name}</span>
              </li>
            </TextLoop>
          );
        })}
      </ul>
    </div>
  );
}

TopList.displayName = 'TopList';

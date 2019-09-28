import React from 'react';
import styles from './index.module.scss';

export default function Title({ data }) {
  return <p className={styles.title}>{data}</p>;
}

Title.displayName = 'Title';

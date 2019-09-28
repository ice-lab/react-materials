import React from 'react';
import styles from './index.module.scss';

export default function Field(props) {
  const { label, value } = props;
  return (
    <div className={styles.field}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

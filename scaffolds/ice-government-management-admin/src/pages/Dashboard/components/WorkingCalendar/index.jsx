import React from 'react';
import { Calendar } from '@alifd/next';
import styles from './index.module.scss';

export default function WorkingCalendar() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h4 className={styles.title}>个人工作指标</h4>
        <Calendar shape="card" className={styles.calendar} />
      </div>
    </div>
  );
}

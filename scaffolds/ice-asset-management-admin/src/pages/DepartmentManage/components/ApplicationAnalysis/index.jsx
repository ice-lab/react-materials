import React from 'react';
import IceContainer from '@icedesign/container';
import DoubleAxesChart from './DoubleAxesChart';
import ApplicationTable from './ApplicationTable';
import styles from './index.module.scss';

export default function ApplicationAnalysis() {
  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>应用分析</h4>
      <DoubleAxesChart />
      <ApplicationTable />
    </IceContainer>
  );
}



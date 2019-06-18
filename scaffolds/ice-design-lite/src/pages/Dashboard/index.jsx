import React from 'react';
import Guide from '@/components/Guide';

import styles from './index.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Guide />
    </div>
  );
}

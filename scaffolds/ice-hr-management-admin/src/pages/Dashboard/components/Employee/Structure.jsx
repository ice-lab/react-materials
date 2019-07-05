import React from 'react';
import IceContainer from '@icedesign/container';
import { Progress } from '@alifd/next';
import styles from './index.module.scss';

export default function Structure() {
  return (
    <IceContainer title="男女比例">
      <div className={styles.item}>
        <h5 className={styles.title}>男</h5>
        <Progress size="large" percent={70} shape="circle" />
      </div>
      <div className={styles.item}>
        <h5 className={styles.title}>女</h5>
        <Progress size="large" percent={30} state="error" shape="circle" />
      </div>
    </IceContainer>
  );
}

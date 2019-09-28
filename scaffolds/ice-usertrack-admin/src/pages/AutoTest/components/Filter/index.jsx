import React from 'react';
import { Input } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

export default function Filter() {
  return (
    <IceContainer className={styles.container}>
      <div className={styles.title}>搜索验证方案：</div>
      <Input
        placeholder="请输入验证方案"
        hasClear
        onChange={(value) => {
          console.log(value);
        }}
        style={{ width: '300px' }}
      />
    </IceContainer>
  );
}

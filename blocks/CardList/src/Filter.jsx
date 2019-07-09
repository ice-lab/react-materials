import React from 'react';
import { Input, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function Filter() {
  const onChange = (value) => {
    console.log({ value });
  };

  return (
    <IceContainer className={styles.containerFilter}>
      <div className={styles.label}>方案名称:</div>
      <Input placeholder="请输入方案名称" hasClear onChange={onChange} />
      <Button type="primary" className={styles.button}>
        查 询
      </Button>
    </IceContainer>
  );
}


